# Marcador — sitio de noticias deportivas

Sitio estático (HTML + CSS + un poco de JS, sin dependencias ni build) para probar el flujo Figma ↔ GitHub.

## Páginas

| Plantilla | Archivo |
|---|---|
| Home | `index.html` |
| Archivo de categoría | `categoria-futbol.html`, `categoria-baloncesto.html`, `categoria-tenis.html`, `categoria-f1.html` |
| Archivo de autor | `autor.html` |
| Single post | `articulo.html` |

## Estructura

```
├── index.html
├── categoria-*.html
├── autor.html
├── articulo.html
├── css/styles.css   ← todos los design tokens están en :root
└── js/main.js       ← menú móvil y filtros por categoría
```

## Design tokens

Colores, tipografía, radios y espacios viven como variables CSS en `css/styles.css` (`--color-*`, `--fs-*`, `--radius-*`). Cambiar un token actualiza todo el sitio.

Las imágenes son placeholders de color con un ícono por deporte (clases `.media--futbol`, `.media--baloncesto`, `.media--tenis`, `.media--f1`). Para usar fotos reales, cambia el `div.media` por un `<img>` o agrega `background-image` inline.

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz del repo.
2. En **Settings → Pages**, elige la rama `main` y carpeta `/ (root)`.
