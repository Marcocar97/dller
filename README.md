# Dller — renovación visual completa

Proyecto React completo basado en la rama master entregada. Conserva la marca, todas las páginas y los contenidos informativos originales, reorganizados en una presentación editorial. Incluye los originales, los recursos optimizados y una carpeta `build/` compilada para publicación.

## Ver la nueva web en tu ordenador

Necesitas Node.js 20 o superior (recomendado: una versión LTS).

1. Extrae el ZIP.
2. Abre una terminal dentro de `dller-master`.
3. Ejecuta:

```bash
npm ci
npm start
```

La web se abrirá normalmente en `http://localhost:3000`. Para el funcionamiento completo utiliza este servidor; abrir `build/index.html` con doble clic no es compatible con sus rutas y recursos.

## Qué incluye

- Portada con fotografía grande, mensaje estable, credenciales y portfolio.
- Navegación compacta, menú móvil y cuatro categorías de cocinas.
- Modern, Classic, European y Unique: todos los proyectos, sus descripciones y sus fotografías; galerías con miniaturas, flechas, teclado y gestos táctiles.
- Servicios de fabricación y diseño colaborativo, con todos los textos originales.
- Empresa: historia, técnicas, sostenibilidad, visión, misión y los seis miembros del equipo.
- Why Dller: todos los argumentos informativos, reorganizados en secciones ilustradas.
- Contacto con validación de email, selección de servicio, estados de envío y recuperación de errores.
- Asistente de contacto a petición del visitante, con llamada, WhatsApp, email, reunión, callback y brochure.
- Brochure descargable directamente; dejar datos para una conversación es opcional.
- Políticas de privacidad y cookies con sus textos existentes y preferencias funcionales.
- 119 imágenes originales con versiones WebP para distintos tamaños y ambos vídeos con versiones optimizadas.
- Metadatos, sitemap, página 404 y entradas directas a las páginas para GitHub Pages.

## Archivos que editar

- `src/redesign/Site.js`: diseño, componentes y comportamiento de todas las páginas.
- `src/redesign/site.css`: colores, tipografía, composición y estilos adaptados a pantalla.
- `src/redesign/content.json`: textos, proyectos y perfiles extraídos de los componentes originales.
- `src/redesign/assets.json`: correspondencia entre las imágenes originales y sus versiones optimizadas.
- `public/optimized/`: recursos utilizados por el nuevo diseño.
- `public/Dller_Brochure.pdf`: brochure original.
- `originals/src/`: copia del código anterior a la renovación.
- `originals/assets/Images/`: todas las fotografías y vídeos originales. No se sirven ni se copian a la publicación.

Los textos informativos, políticas, fotografías y biografías se han conservado. Se han añadido títulos y transiciones para organizar la lectura. Las fechas de las políticas y las afirmaciones sobre antigüedad/equipo se mantienen como en el original; no se han inventado testimonios ni nombres de clientes.

## Contacto y EmailJS

Se conservan como valores predeterminados el servicio, la plantilla y la clave pública de EmailJS que traía master. Los campos originales `user_name`, `user_email`, `user_phone` y `message` se mantienen. Empresa y tipo de consulta también se incluyen dentro de `message`, de modo que una plantilla que ya muestra el mensaje pueda recogerlos sin cambios.

Puedes configurar otros identificadores copiando `.env.example` a `.env.local`, cambiando los valores y reiniciando el servidor. Estas variables se incorporan al JavaScript público; no deben contener claves privadas.

Se ha hecho coincidir la dirección visible de cada enlace con su destino: `enquiry@dller.com` para consultas generales y `chiles@dller.com` para la consulta personal indicada en servicios/asistente. La dirección `kontakt@dller.com` de la política original se conserva.

Antes de publicar, envía una consulta real desde tu navegador y confirma que llega al buzón previsto. Las pruebas automatizadas simulan EmailJS; no verifican la disponibilidad del servicio, sus restricciones de dominio, su cuota ni la configuración del destinatario en la plantilla. El ZIP no incorpora una nueva plataforma de reservas: el callback y la reunión son solicitudes de contacto.

## Comprobar y compilar

```bash
npm run check:content
npm test -- --watchAll=false --runInBand
npm run build
```

El build ejecuta automáticamente `scripts/postbuild.cjs`, que genera entradas para las diez páginas interiores, sitemap y 404. Esto permite abrir las rutas directamente en GitHub Pages. Mantén el dominio configurado como `www.dller.com`; los recursos usan rutas desde la raíz del dominio.

## Publicar en el repositorio existente

El ZIP no contiene `.git` ni `node_modules`. Para conservar tu repositorio y su remoto, copia los archivos dentro de tu checkout de master conservando su carpeta `.git`. `build/` no necesita añadirse al commit de master.

Con el remoto del repositorio ya configurado y acceso para publicar:

```bash
npm ci
npm run deploy
```

`predeploy` compila el proyecto y `gh-pages` publica el contenido de `build/` en la rama gh-pages. Se conserva `public/CNAME` con el dominio original. La renovación no ha sido publicada automáticamente.

También puedes publicar el contenido de `build/` en un alojamiento estático que soporte las rutas indicadas. Publica el contenido compilado, no la carpeta `originals/`.

## Verificaciones y límites

- 36 pruebas automatizadas: páginas, conservación de textos, equipo, navegación, galerías, contacto, manejo de errores, brochure y cookies.
- Inventario de contenido y comprobación de todas las referencias de imágenes.
- Compilación de producción y generación de rutas estáticas.
- Los originales se verifican contra el ZIP de master para conservar sus bytes.
- No se ha realizado una inspección visual del nuevo diseño en un navegador ni una prueba de recepción real de emails en este entorno. Revisa el resultado en escritorio y móvil con `npm start` antes de publicar.
- Las preferencias de cookies se conservan y se almacenan; no se han añadido Analytics ni píxeles publicitarios. Una campaña que requiera medición necesitará configurarlos y vincularlos al consentimiento.

## Volver a generar las imágenes (opcional)

No es necesario para instalar o compilar: las versiones optimizadas ya están incluidas. Para regenerarlas se necesitan Python con Pillow y FFmpeg:

```bash
python scripts/optimize-assets.py
```

Los originales se mantienen separados de los recursos de publicación. `scripts/extract-content.cjs` permite volver a extraer los textos desde la copia original; no lo ejecutes después de editar `content.json`, porque sustituiría esos cambios.
