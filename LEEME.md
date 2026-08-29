# Vista de Productos — React

Migración de la vista **Productos** del sitio HTML original a React,
componentizada. Layout: sidebar de navegación fija a la izquierda +
contenido principal (barra de búsqueda, encabezado, filtros y grid de
productos).

Este paquete ya incluye TODO el proyecto (package.json, vite.config.js,
index.html, src/main.jsx) — no necesitas correr `npm create vite`.

## Tecnologías y versiones utilizadas

| Herramienta | Versión |
|---|---|
| React | ^18.3.1 |
| React DOM | ^18.3.1 |
| Vite | ^5.4.1 |
| @vitejs/plugin-react | ^4.3.1 |
| Node.js recomendado | 18.x o superior |
| npm | 9.x o superior |
| Íconos | Google Material Icons Outlined (vía CDN) |

Puedes verificar tu versión de Node y npm con:

```bash
node -v
npm -v
```

## Cómo usarlo

1. Descomprime este zip. Puedes renombrar la carpeta `vista-producto` como
   quieras, o reemplazar tu carpeta actual completa por esta.

2. Abre una terminal dentro de la carpeta y corre:

   ```bash
   npm i
   ```

3. Luego:

   ```bash
   npm run dev
   ```

4. Copia el enlace que te da (normalmente `http://localhost:5173/`) y
   ábrelo en el navegador.

## Estructura de componentes

- `Sidebar` — navegación fija a la izquierda (logo, links Inicio/Productos/
  Servicios/Información, y bloque de usuario abajo). Queda fija en pantalla
  al hacer scroll (`position: fixed`).
- `TopBar` — barra de búsqueda + íconos de notificaciones/configuración
- `ProductsHeader` (dentro de `App.jsx`) — título, subtítulo y botón "Nuevo Producto"
- `FilterSidebar` — filtros de categoría (checkboxes) y rango de precio (slider)
- `ProductList` — recorre el arreglo `products` y renderiza un `ProductCard` por cada uno
- `ProductCard` — tarjeta individual (ícono, badge de categoría, nombre,
  descripción, línea divisoria, precio y botón "Detalles")
- `FeatureHighlight` — recorre el arreglo `features` y renderiza los 3 bloques inferiores

Los datos (`products` y `features`) están separados en `src/data/products.js`
para no mezclar datos con la lógica visual.

## Estructura de carpetas

```
vista-producto/
├── index.html
├── package.json
├── vite.config.js
├── LEEME.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── components/
    │   ├── Sidebar.jsx
    │   ├── TopBar.jsx
    │   ├── FilterSidebar.jsx
    │   ├── ProductList.jsx
    │   ├── ProductCard.jsx
    │   └── FeatureHighlight.jsx
    └── data/
        └── products.js
```

## Recuerda para la entrega

- Haz **commits frecuentes** en Git a medida que integres esto (no un solo
  commit gigante al final) — el profe revisa el historial.
- Sube el repo a GitHub/GitLab y entrega el enlace por el formulario oficial.
- Plazo: este sábado, 23:59 hrs.
