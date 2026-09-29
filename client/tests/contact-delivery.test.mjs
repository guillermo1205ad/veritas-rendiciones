import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = readFileSync(new URL('../src/lib/contact-delivery.ts', import.meta.url), 'utf8');
function setup(fetch, key = '', timeout = setTimeout) {
  const code = ts.transpile(source.replace('import.meta.env.VITE_WEB3FORMS_ACCESS_KEY', JSON.stringify(key)), { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 });
  const context = { exports: {}, fetch, AbortController, encodeURIComponent, window: {setTimeout: timeout, clearTimeout} };
  vm.runInNewContext(code, context);
  return context.exports;
}
function form() {
  const data = new FormData();
  data.set('Nombre', 'Persona de prueba');
  data.set('email', 'test@example.com');
  data.set('Organización', 'Organización & prueba');
  data.set('Mensaje', 'Mensaje con acentos y signos: ¿funciona?');
  data.set('_subject', 'Consulta VÉRITAS');
  data.set('_next', 'https://example.com/gracias.html');
  data.set('_honey', '');
  return data;
}

test('rechaza fallos HTTP, JSON inválido, error de red y respuestas sin éxito confirmado', async () => {
  for (const fetch of [
    async () => ({ok:false,status:500}),
    async () => ({ok:true,json:async()=>{throw new SyntaxError('html instead of json');}}),
    async () => {throw new TypeError('network unavailable');},
    async () => ({ok:true,json:async()=>({success:false})}),
    async () => ({ok:true,json:async()=>({message:'unknown'})}),
  ]) await assert.rejects(setup(fetch).sendConsultation(form()));
});
test('acepta solo confirmación explícita del proveedor', async () => {
  for (const success of [true,'true']) await setup(async()=>({ok:true,json:async()=>({success})})).sendConsultation(form());
});
test('envía todos los datos por FormSubmit y no incluye una redirección en la solicitud AJAX', async()=> {
  let sent;
  const delivery = setup(async(url,options)=>{sent={url,body:JSON.parse(options.body)};return{ok:true,json:async()=>({success:true})};});
  await delivery.sendConsultation(form());
  assert.equal(sent.url,'https://formsubmit.co/ajax/guillermo1205ad@gmail.com');
  assert.equal(sent.body.email,'test@example.com');
  assert.equal(sent.body['Organización'],'Organización & prueba');
  assert.equal(sent.body._next,undefined);
});
test('con una clave pública utiliza Web3Forms y conserva el email de respuesta', async()=> {
  let sent;
  const delivery = setup(async(url,options)=>{sent={url,body:JSON.parse(options.body)};return{ok:true,json:async()=>({success:true})};},'public-test-form-id');
  await delivery.sendConsultation(form());
  assert.equal(sent.url,'https://api.web3forms.com/submit');
  assert.equal(sent.body.access_key,'public-test-form-id');
  assert.equal(sent.body.email,'test@example.com');
  assert.equal(sent.body.subject,'Consulta VÉRITAS');
  assert.equal(sent.body.botcheck,false);
  assert.equal(sent.body._subject,undefined);
});
test('el señuelo bloquea el envío sin contactar al proveedor', async()=> {
  let calls=0;const data=form();data.set('_honey','spam');
  await assert.rejects(setup(async()=>{calls++;}).sendConsultation(data));
  assert.equal(calls,0);
});
test('el respaldo por correo contiene los datos y excluye campos de configuración',()=> {
  const url=new URL(setup(()=>{}).consultationMailto(form()));
  assert.equal(url.pathname,'guillermo1205ad@gmail.com');
  assert.match(url.searchParams.get('body'),/Organización & prueba/);
  assert.match(url.searchParams.get('body'),/¿funciona\?/);
  assert.doesNotMatch(url.searchParams.get('body'),/_next|_honey|_subject/);
});
test('interrumpe un proveedor sin respuesta y devuelve un fallo recuperable', async()=> {
  const fetch=async(_url,options)=>new Promise((_resolve,reject)=>options.signal.addEventListener('abort',()=>reject(new Error('timeout'))));
  await assert.rejects(setup(fetch,'',(callback)=>setTimeout(callback,1)).sendConsultation(form()),/timeout/);
});
