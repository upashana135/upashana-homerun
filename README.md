# HomeRun

This project is a responsive e-commerce frontend built with React.js, Tailwind CSS, and react hooks. It includes features like a shopping cart with persistent storage, quantity validation, and responsive UI components such as sliders and footers.

## Features

## Shopping cart
- **Local Storage Persistence** — Cart data is stored in `localStorage` so that it remains after page reloads.
- **Add to Cart** — Add products with default quantity or a specified quantity.
- **Update Quantity** — Update item quantities directly, with a maximum limit of `20` for each product.
- **Remove Items** — Automatically removes items from the cart when quantity is set to `0`.
- **Toast Notifications** — Displays an error message when trying to add more than the allowed quantity.
- **Cart Icon with shopping count** - Displays a cart icon with the number of items on top. Updates live as cart changes.

## Tech Stack
- **React.js** - React based frontend.
- **Tailwind CSS** — Utility-first CSS framework for styling.
- **React Hooks** — State management and lifecycle handling.
- **Local Storage** — Persistent cart storage in the browser.
- **React Toastify** - Toast notifications for feedback.

## Installation
- Clone the repository
- Install dependencies
    **npm install**
- Run the development server
    **npm run dev**

## Requirements
- Node version: 20+
