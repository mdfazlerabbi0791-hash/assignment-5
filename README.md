# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...

      1. Name of my project: Technology Stack.

      2. A little description: Technology Stack is a modern platform for exploring and discovering essential technologies for developers. It helps users learn about different tools, frameworks, and technologies in one organized place. Users can explore technologies and build their own personalized development stack.

      3. Technology that you use : 1. React 2. TypeScript 3. Tailwind CSS 4. Vite 5. React toastify 6. JSON 7. JavaScript ES6 

      4. 3 features about your project: 1. Explore Technologies 2. Build Your Stack 3. Responsive Design


      //======================   =====================================

      1. What is JSX, and why is it used in React?
      Answer: JSX is a syntax extension of JavaScript that allows us to write HTML-like code in React. It is used to create the structure of UI or components easily and make the code more readable.

      2. What is the difference between props and state?
      Answer: Props are used to pass data from a parent component to a child component, while state is used to manage data that can change within a component.

      3. What does the useState hook do, and where did you use it in this project?
      Answer: The useState hook is used to manage and update data that can change in a React component. In this project, I used it to manage the selected technologies in my stack.

      4. What does the useEffect hook do, and why did you need it to load the JSON data?
      Answer: The useEffect hook is used to perform side effects in a React component. I used it to fetch and load JSON data when the component was loaded.

      5. Why does every item in a .map() list need a unique key prop?
      Answer: A unique key prop helps React identify each item in a list and efficiently update, add, or remove items when the list changes.

      6. 1. What is conditional rendering? Show one place you used it (example: the empty stack message).
      Answer: Conditional rendering means displaying different UI based on a condition. I used it to show an empty stack message when there are no technologies in the stack and to change the button color.

      7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
      Answer: Data is passed from a parent to a child using props. A child can send data back to the parent by calling a function passed as a prop from the parent.
    },
  },
])

```
