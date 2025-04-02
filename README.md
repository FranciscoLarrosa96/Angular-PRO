# 🚀 Angular + TailwindCSS Setup

Proyecto base con Angular 19 y TailwindCSS 3.4.1 configurado desde cero.

## ✅ Requisitos

- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)

---

## 🧱 Instalación paso a paso

### 1. Crear el proyecto

```bash
ng new mi-app-tailwind
cd mi-app-tailwind
```

> Elegir **CSS** como preprocesador al crear el proyecto.

---

### 2. Instalar TailwindCSS y dependencias

```bash
npm install -D tailwindcss@3.4.1 postcss autoprefixer
npx tailwindcss init
```

---

### 3. Configurar Tailwind

#### `tailwind.config.js`

```js
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### 4. Crear archivo `styles.css`

En `src/styles.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 5. Editar `angular.json`

Buscar `"styles"` y reemplazar con:

```json
"styles": [
  "src/styles.css"
]
```

---

### 6. Crear archivo `postcss.config.js` en la raíz

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

---

### 7. Levantar el servidor

```bash
ng serve
```

---

### 8. Verificar

En `app.component.html`:

```html
<h1 class="text-5xl text-green-500 font-bold text-center mt-20">
  ✅ ¡Tailwind funcionando!
</h1>
```

---

## 🧠 Tips

- Si no ves estilos, asegurate de reiniciar el servidor (`Ctrl+C` y `ng serve`).
- No mezcles `styles.scss` con `styles.css` si no configuraste SCSS.
- Usá clases de Tailwind directamente en los templates Angular (HTML).

---

## 💬 Créditos

Este proyecto fue configurado con ❤️ y mate por un desarrollador que no quiere sufrir más configurando Tailwind en Angular. 😎
