## Diseño web para app móvil académica

¡Bienvenido al proyecto de diseño para el desarrollo de una aplicación web orientado a servicios académicos para trabajos investigativos!

En el siguiente [enlace](https://www.figma.com/file/0W7ydNVHSTOBXmXL1xWTAy/Untitled?type=design&node-id=0%3A1&mode=design&t=gHmpkGSncWPSgyPI-1) podrás encontrar a detalle el diseño elaborado en Figma, y sobre el cual se realizó la maquetación web.

El diseño se elaboró solo para app móvil, no para escritorio. La base fue el model de iPhone 12 Pro.

¡Gracias!

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
