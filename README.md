# 🚀 DevStack

## 📖 Description

DevStack is a modern and responsive React-based web application that allows users to explore different development technologies and build their own personalized technology stack.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS, DaisyUI
- React-Toastify
- JSON
- Vite

## ✨ Features

- 🔍 **Explore Technologies** — Browse technologies with their icons, descriptions, categories, difficulty levels, ratings, and badges.
- 🧰 **Build Your Stack** — Add technologies to your personal stack, remove individual items, or remove all selected technologies.
- 📱 **Responsive Design** — Fully responsive interface that works smoothly on mobile, tablet, and desktop devices.

# ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes creating React UI components easier and more readable.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.  
**State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage state in a React component.

I used it to store the selected technologies in the **Technology Grid** section and update the stack when technologies are added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used it to load the technology data from the JSON file when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently detect which items have been added, removed, or changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

I used it in the **Technology Card** section to show the message "added to stack" if the technology button is pressed and if not then "add to stack".

```jsx
 {added ? '✓ Added to Stack' : 'Add to Stack'}
```

 ### 7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props.

A child can send information back to the parent by calling a function that the parent passes through props.
