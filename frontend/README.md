# How to Run the Frontend (React + TypeScript + Vite)

This is the **frontend** of the project.

> ⚡ The backend is located in the `/fastapi-backend` folder. See `/fastapi-backend/README.md` for setup instructions.

## 1. Clone the repository

First, clone the entire project:

```console
git clone https://github.com/Resilient-Labs/Ascend2025a-AILearningTool.git
```

Then navigate to the backend folder:

```console
cd Ascend2025a-AILearningTool/fasatapi-backend
```

## 2. Install dependencies

```console
npm install
```

## 3. Set up environment variables

- Create a .env file in the project root.
- Add this to your .env file:

```console
VITE_API_URL=http://localhost:8000
```

## 4. Run the development server

```console
npm run dev
```

- This will start the Vite dev server at:

```console
http://localhost:5173
```

- (Or another port if 5173 is taken — Vite will tell you.)
- If the dev server starts on another port, you may have to change the port in your /fastapi-backend/.env file & your /fastapi-backend/app/core/config.py file.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
