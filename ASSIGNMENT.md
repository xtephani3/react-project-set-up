## WTF Assignment on: npm, package.json, and Vite
 
### 1. npm (Node Package Manager)
 
**Definition:** npm is the default package manager for the Node.js runtime environment. It consists of two main components: a command-line interface (CLI) and a massive online registry of open-source JavaScript packages (modules).
 
**Function in a Project:**
 
* **Dependency Management:** It is used to install, update, and remove third-party software packages (libraries) required for a project, such as React or specific utility libraries. These packages are stored locally in the **`node_modules`** directory.
* **Script Execution:** It allows the execution of defined project scripts (e.g., for starting a development server, building the final application, or running tests) via the `npm run <script-name>` command.
 
---
 
### 2. package.json
 
**Definition:** The **`package.json`** file is the required **metadata manifest** for any Node.js or JavaScript project, located at the root directory. It is structured using the JSON format.
 
**Function in a Project:**
 
* **Project Identification:** Contains descriptive metadata such as the project's **`name`**, **`version`**, and **`license`**.
* **Dependency Listing:** Critically lists all software requirements:
    * **`dependencies`**: Packages required for the application to run in production.
    * **`devDependencies`**: Packages required only for the development workflow (e.g., testing tools, build tools like Vite).
* **Script Definitions:** The **`scripts`** field defines custom aliases for common tasks, such as `"dev": "vite"` or `"build": "vite build"`. These are executed via the npm CLI.
 
---
 
### 3. Vite
 
**Definition:** **Vite** is a modern **frontend build tool** that serves as a development server and bundler, focusing on significantly improving the developer experience through speed.
 
**Function in a Project:**
 
* **Development Server with Native ESM:** It uses the browser's **native ES Modules (ESM)** support during development. This avoids the need for initial bundling, resulting in **instant server startup** and leverages the browser to fetch code modules on demand.
* **Hot Module Replacement (HMR):** Vite implements highly efficient HMR, which applies code updates to the browser instantly without a full page reload, maintaining the application state.
* **Production Bundling:** For deployment, Vite uses **Rollup** to bundle the final code. It performs optimizations such as code-splitting, tree-shaking, and asset handling to create highly performant, production-ready static files.
 