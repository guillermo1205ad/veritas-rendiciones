# Formulario de contacto VÉRITAS

Destinatario: `guillermo1205ad@gmail.com`.

## Estado verificado el 29 de septiembre de 2026

El rediseño se publicó y se verificó en GitHub Pages. La integración inicial con FormSubmit devolvió HTTP 500 tanto en el POST nativo desde el sitio como en su API AJAX. **No se ha confirmado activación ni entrega de correo.** No afirmar que la recepción automática está operativa.

Se dejó preparada una alternativa con Web3Forms, pendiente de la clave pública del formulario asociado al correo del propietario. Crear la cuenta/formulario y aceptar los términos del proveedor requiere participación del propietario.

## Comportamiento publicado

- El envío se realiza desde el navegador con respuesta JSON y un plazo máximo de 20 segundos.
- Solo se navega a `gracias.html` cuando el proveedor devuelve HTTP correcto y `success: true` o `success: "true"`.
- Ante error HTTP, respuesta inválida, error de red o timeout, los datos se conservan en el formulario. No se almacenan en localStorage.
- Se muestra un aviso y un enlace que abre el cliente de correo con la consulta completada. **La persona debe pulsar Enviar en su aplicación de correo.** Abrir el borrador no envía nada.
- El campo `email` identifica el correo de respuesta del interesado. Los tres campos obligatorios son nombre, correo y organización. El resto es opcional.
- Se usa un campo señuelo contra bots. El envío AJAX utiliza la protección que ofrece el proveedor; no presenta el reCAPTCHA del flujo nativo.

## Activar Web3Forms

1. El propietario crea un formulario en https://web3forms.com utilizando `guillermo1205ad@gmail.com` y verifica el correo.
2. Copiar la **Access Key pública del formulario**, no una contraseña ni una credencial privada.
3. Crear `client/.env.local` con `VITE_WEB3FORMS_ACCESS_KEY=CLAVE_PUBLICA`. El ejemplo está en `client/.env.example`.
4. Compilar y publicar. La clave del formulario es pública por diseño y se incluye en el frontend. No permite leer Gmail.
5. Enviar una consulta de prueba desde el sitio publicado y verificar su llegada a Gmail, los campos y la dirección de respuesta.

Sin esa variable se utiliza `https://formsubmit.co/ajax/guillermo1205ad@gmail.com`. Si se opta por FormSubmit cuando se restablezca, su correo de activación debe confirmarse antes de verificar entrega. No cambiar a un proveedor adicional automáticamente ni reenviar consultas fallidas a múltiples servicios.

## Pruebas

- `npm --prefix client run build`: TypeScript y compilación de producción.
- `npm --prefix client test`: 7 pruebas de respuestas exitosas, fallos, timeout, campos enviados, alternativa Web3Forms, honeypot y correo de respaldo.
- Navegador: campos obligatorios, correo inválido, conservación de datos ante fallo real, campos opcionales, menú móvil y ausencia de desbordes a 320 y 390 px.
- La página `gracias.html` es una confirmación visual, no una prueba de entrega en la bandeja del propietario.

## Referencias oficiales

- https://formsubmit.co/documentation
- https://formsubmit.co/ajax-documentation
- https://docs.web3forms.com/getting-started/installation
- https://docs.web3forms.com/getting-started/faq
