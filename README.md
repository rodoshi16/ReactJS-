# 📘 ReactJS Learning Repository

This repository documents everything I'm learning about ReactJS — from foundational concepts to hands-on examples. The goal is to help **others learn React** along the way, using structured markdown files, example code, and explanations.

---

## 📂 How to Navigate

Go to:

```
src/learning-docs/
```

Inside this folder, you’ll find detailed documentation:

- [`intro.md`](src/learning-docs/intro.md) – ReactJS basics, project setup, JSX, components, props, rendering logic
- [`components.md`](src/learning-docs/advanced.md) – Hooks (`useState`, `useEffect`), lifting state up, conditional rendering, event handling
- [`state_management.md`](src/learning-docs/examples.md) – Code snippets and use cases for creating components, rendering lists, and managing user interaction

---

## 📄 Summary of Docs

### 1. `intro.md` – *Foundations of ReactJS*

Covers:
- What is ReactJS and the Virtual DOM
- UI workflow between browser, UI server, API, and DB
- Structure of a React project (`public/`, `src/`, `App.js`, `index.js`)
- JSX basics: how it differs from plain JS, why we use it
- Creating and using components
- Props and passing data
- Iterating with `.map()` in JSX
- Conditional rendering using ternary, if-else, &&, switch
- Using fragments and styling in JSX

---

### 2. `components.md` 

- Creating reusable functional components
- Component nesting
- Styling with `className` and inline `style` objects (camelCase!)
- Using curly braces to embed JS expressions in JSX
- Rendering lists with `.map()` and unique `key` props
- Conditional rendering patterns (`if`, ternary)
- Handling user events with `onClick` and event handlers


---

### 3. `state_management.md` 

Includes:
- Introduction to `useState` hook and its syntax
- Storing and updating state in a component
- How each component maintains its own state
- Sharing state by lifting it to a parent component
- Passing state and update functions as `props`
- Synchronizing UI updates across multiple components

---

## 🚀 Getting Started with React

To create your first project:
```bash
npx create-react-app my-app
cd my-app
npm start
```

You'll be able to start coding in `App.js` under the `src/` folder.

---

## 👩‍💻 Goal of This Repo

This repo is meant to serve as:
- A **personal guide** to React
- A **resource for beginners**
- A place to practice and demonstrate clean documentation habits and GitHub workflows (commits, PRs, branches)

---

## ✅ Contributions Welcome

If you’re also learning React or want to improve this documentation, feel free to fork this repo, make a change, and open a pull request!
