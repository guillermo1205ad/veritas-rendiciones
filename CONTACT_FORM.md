# Formulario de contacto

El formulario de `client/src/components/AuditIntakeForm.tsx` envía consultas por POST HTML a FormSubmit, con destinatario `guillermo1205ad@gmail.com`. Funciona desde GitHub Pages sin un servidor propio para procesar el correo. No guarda consultas en el navegador ni muestra una confirmación local cuando el envío falla.

## Activación inicial obligatoria

1. Publicar el sitio y comprobar que `https://guillermo1205ad.github.io/veritas-rendiciones/gracias.html` carga correctamente.
2. Abrir el formulario en la URL pública y realizar un envío de prueba claramente identificado, usando datos de prueba no sensibles y un correo del responsable del sitio.
3. Revisar `guillermo1205ad@gmail.com`, incluida la carpeta de spam, y abrir el correo de activación enviado por FormSubmit.
4. Pulsar el enlace de activación del formulario. Este paso debe realizarlo una persona con acceso al correo.
5. Enviar una segunda consulta de prueba desde el sitio publicado y comprobar que llega a Gmail con todos sus campos. Verificar también que responder al correo usa la dirección introducida en el campo `email`.

La configuración por sí sola no confirma la activación ni la entrega a Gmail. Una página de agradecimiento o una respuesta del servicio tampoco demuestra recepción en la bandeja de entrada. Hasta completar esos pasos, describir el estado como «configurado, pendiente de activación y prueba de recepción».

## Configuración y comportamiento

- `action`: `https://formsubmit.co/guillermo1205ad@gmail.com`
- `method`: `POST`; el navegador realiza el envío y el servicio gestiona sus errores.
- `email`: nombre reservado para que FormSubmit configure la dirección de respuesta con el correo de quien consulta.
- `_subject`: `Nueva consulta · Veritas Rendiciones`.
- `_template`: `table`, para una lectura ordenada en el correo.
- `_url`: URL pública completa del formulario.
- `_next`: URL pública absoluta de `gracias.html`. La página se encuentra en `client/public` y Vite la copia al directorio de publicación.
- `_honey`: campo invisible que ayuda a filtrar bots.
- reCAPTCHA permanece habilitado por defecto. No se incluye `_captcha=false`.
- Solo nombre, correo y organización son obligatorios. Los selectores no tienen un organismo o presupuesto preseleccionado.
- La página de agradecimiento no promete entrega confirmada, un plazo de respuesta ni acuerdos legales.

Si el servicio no permite completar un envío, el visitante puede volver al formulario o escribir mediante el enlace directo al correo. Si el navegador no carga el sitio desde un servidor web, FormSubmit puede rechazar el envío; hacer las pruebas finales en la URL de GitHub Pages.

Al cambiar el destinatario, es necesaria una nueva activación. Si cambia el dominio o la ruta de publicación, actualizar `_url` y `_next`. FormSubmit entrega tras la activación un identificador alternativo que puede sustituir el correo visible en `action`; este cambio es opcional y debe verificarse con otra prueba.

## Comprobaciones antes de declarar el formulario operativo

- Validación nativa de los tres campos obligatorios y de la sintaxis del correo.
- Todos los campos que deben enviarse tienen `name`.
- Navegación con teclado y apertura de «Agregar datos del proyecto».
- Ausencia de almacenamiento local de consultas o confirmaciones simuladas.
- Publicación de `gracias.html`, activación del destinatario y recepción real de una consulta de prueba.

## Fuentes oficiales

- [Configuración inicial y activación](https://formsubmit.co/)
- [Campos especiales, reCAPTCHA y honeypot](https://formsubmit.co/documentation)
- [Problemas de activación y entrega](https://formsubmit.co/help)
- [Política del proveedor](https://formsubmit.co/privacy.pdf)

No se realizaron envíos al implementar estos archivos. La activación y recepción deben verificarse por separado.
