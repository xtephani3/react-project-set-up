# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Asignment on: DOM elements/document and react intro/hooks

### DOM DOCUMENT
The document object represents your web page.
If you want to access any element in an HTML page, you always start with accessing the document object.
You can find and manipulate HTML elements using the document object.
You can find elements using document.getElementById(id), document.getElementsByTagName(name), document.getElementByClassName(name).
You can manipulate (e.g. change,add or delete) elements using element.InnerHTML = new html content, element.attribute = new value, document.createElement(element), document.removeChild(element), and so much more.

---


### DOM ELEMENTS
Often, you need to manipulate HTML elements with javascript.
To do so, you have to find the elements first. You can do this in several ways:
Finding HTML elements by id
Finding HTML elements by tag name
Finding HTML elements by class name
Finding HTML elements by CSS selectors
Finding HTML elements by HTML object collections.
The easiest way to find an HTML element in the DOM is by using the element id.
E.g To find an element with an id of “heading”:
const element = document.getElementById("heading").
If the element is found, the method will return the element as an object (in element).
If the element is not found, the element will contain null.

---


### INTRODUCTION TO REACT
React is defined as a JavaScript library for building user interfaces. React follows the Unix philosophy because it is a small library that focuses on just building user interfaces.
A User Interface (UI) is anything we put in front of users to have them interact with a machine. UIs are everywhere, from the simple buttons on a microwave to the dashboard of a space shuttle. If the device we are trying to interface can understand JavaScript, we can use React to describe a UI for it. Since Web browsers understand JavaScript, we can use React to describe Web UIs.

**React’s Tree Reconciliation-** React makes working with the browser faster and smoother by reducing direct work on the DOM, because heavy DOM operations can slow down the browser and affect user actions. When React renders a page, it first creates a virtual version of the UI in memory, and when something changes it creates a new virtual version and compares it with the old one. React then updates only the parts that changed instead of redoing everything, which makes apps more efficient and responsive.

**ReactDOM.render and React.createElement-** ReactDOM.render is the method that connects a React application to the browser. It takes a React element and renders it into a specific existing DOM node in the HTML, acting as the entry point where React takes control of part of the page and updates the real DOM based on the element’s state.
React.createElement is what React uses to build a description of the page in memory by creating virtual elements.

**React is all about components-** In React, UIs are described using components that are reusable, composable and stateful.React components take a set of props as input and output a description of a reusable piece of  UI.

**Creating components using functions-** A react component in its simplest forms looks like a javascript function. It is written in JSX, an extension to javascript that allows us to write function calls in an HTML-like syntax. 

JSX may look like HTML but  it is not HTML. It is not recognized by the browser and must be compiled before the browser can run it. JSX is just a compromise instead of writing React.createElement(). We use a syntax very close to HTML.


**Functions vs classes -** Originally, class components were needed for state. Now with react hooks, function components can have state and side effects too, so most new React uses functions instead of classes.  ￼ ￼


**What exactly are hooks? -** Hooks are special functions (starting with use) that let function components have state, manage side effects, and more. They make function components powerful.  


**Responding to user events -** React components can respond to things like clicks or typing by attaching event handlers to UI elements.  


**Reading and updating state -** useState lets a component remember and change data over time, causing React to re-render when state updates.  


**Making components reusable -** You make components flexible by passing different props so the same component can behave differently in different places.  


 
### REACT HOOKS


**useState-** This allows us to create state variables in a react function component. State allows us to access and update certain values in our component over time. ￼


**useEffect-** This lets you perform side effects in function components. Side effects are actions that change our component state in an unpredictable manner.


**useRef-** This gives you a way to reference a DOM element.  


**useCallback-** This remembers a function so it doesn’t get recreated on every render, which can help performance when you pass functions to child components.  


**useMemo-** This allows us to memoize, or remember the result of expensive operations when they have already been made for certain inputs.  
useContext- This lets components share data (like theme or user info) without passing props through every component in the tree.  


**useReducer-** This another way to manage component state especially helpful when state logic is complex or involves multiple related updates.

## WTF Assignment on: npm, package.json, and Vite
 
### 1. npm (Node Package Manager)
 
**Definition:** npm is the default package manager for the Node.js runtime environment. It consists of two main components: a command-line interface (CLI) and a massive online registry of open-source JavaScript packages (modules).
 
**Function in a Project:**
 
* **Dependency Management:** It is used to install, update, and remove third-party software packages (libraries) required for a project, such as React or specific utility libraries. These packages are stored locally in the node_modules directory.
* **Script Execution:** It allows the execution of defined project scripts (e.g., for starting a development server, building the final application, or running tests) via the `npm run <script-name>` command.
 
---
 
### 2. package.json
 
**Definition:** The package.json file is the required metadata manifest for any Node.js or JavaScript project, located at the root directory. It is structured using the JSON format.
 
**Function in a Project:**
 
* **Project Identification:** Contains descriptive metadata such as the project's name, version, and license
* **Dependency Listing:** Critically lists all software requirements:
    * **`dependencies`**: Packages required for the application to run in production.
    * **`devDependencies`**: Packages required only for the development workflow (e.g., testing tools, build tools like Vite).
* **Script Definitions:** The scripts field defines custom aliases for common tasks, such as `"dev": "vite"` or `"build": "vite build"`. These are executed via the npm CLI.
 
---
 
### 3. Vite
 
**Definition:** **Vite** is a modern **frontend build tool** that serves as a development server and bundler, focusing on significantly improving the developer experience through speed.
 
**Function in a Project:**
 
* **Development Server with Native ESM:** It uses the browser's **native ES Modules (ESM)** support during development. This avoids the need for initial bundling, resulting in **instant server startup** and leverages the browser to fetch code modules on demand.
* **Hot Module Replacement (HMR):** Vite implements highly efficient HMR, which applies code updates to the browser instantly without a full page reload, maintaining the application state.
* **Production Bundling:** For deployment, Vite uses **Rollup** to bundle the final code. It performs optimizations such as code-splitting, tree-shaking, and asset handling to create highly performant, production-ready static files.

---

