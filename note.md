# **React & Related Concepts**

## **JavaScript Overview**

- JS is a **lightweight, interpreted (JIT-compiled) programming language** with **first-class functions**.
- **Invented by**: **Brendan Eich**
- **Key Features**:
  - Prototype-based
  - Imperative
  - Object-Oriented Programming (OOP)
  - Dynamic
  - First-class functions
  - Prototype inheritance
  - Single-threaded

### **Example of React Code**

```javascript
const heading = React.createElement("h1", {}, "Hello World!");
```

- **React creates a header element.**
- **ReactDOM** puts this element in the browser.

---

## **ReactDOM**

- **What is ReactDOM?**

  - ReactDOM is responsible for **rendering** React elements and components into the actual **DOM** of the webpage.

- **What is Virtual DOM?**

  - The Virtual DOM is a **copy of the actual DOM representation**.
  - It helps improve performance by reducing expensive DOM manipulations.

- **Direct DOM manipulations are expensive!**
  - **Why?**
    - **DOM operations are costly** and slow down the webpage.
    - **React optimizes this** by using the Virtual DOM to reduce direct DOM updates.

---

## **CDN (Content Delivery Network)**

- **A network of servers that distribute content to users** based on their geographic location.
- **Goal**: Provide **high availability** and **better performance** by serving content from the nearest server.

---

## **Why Did React Come Out?**

- To **optimize UI updates** with the **Virtual DOM**.
- To make UI **updates easier** with a **declarative approach**.
- To **merge UI efficiently** with reusable **components**.
- It also **simplifies UI development**.
- **Whatever is inside `<div id="root">` in HTML** will be replaced by **React DOM nodes**.
- **React is a library**, meaning it can work **only in small portions** of your app.
- You can use **React in your existing app**.

---

# **What is Bundling?**

- The process of **combining multiple JavaScript, CSS, and other assets** into a single file.
- Helps improve the **loading speed** of the site.
- Example of **versioning**:
  - "^1.2.3" carrot sign for minor update 1.2.4
  - "~1.2.3" tilde sign for major update 1.3.1

---

# **NPM (Node Package Manager)**

- **NPM is not Node itself; it is a package manager**.
- `package.json` is the **configuration file** for npm.
- `package-lock.json`:
  - A **way to lock down** the exact versions of packages.
  - Ensures that **the same versions** of dependencies are installed across different environments.
- **Transit dependency packages need to match package versions** to avoid conflicts.

---
