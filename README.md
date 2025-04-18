# Startup App Landing Page

This project implements a landing page for a startup app, focusing on a clean design and user-friendly experience. It includes a Hero section with a signup form and a Pricing Tables section that acts as the login screen.

## Requirements Checklist

- [x] Implemented Hero section
- [x] Responsive design for desktop and mobile resolutions
- [x] Input validation for the Sign Up form
- [x] Sign Up action sends requests to a server action (simulating an endpoint)
- [x] Predefined input combinations to simulate loading, success, and error states
- [x] Error handling and user feedback (e.g., toasts)
- [x] Protection against button abuse
- [x] State management (logged in / logged out) using React Context
- [x] Pricing Tables section replaces the login screen when logged in
- [x] Components scale and wrap elements appropriately for different screen proportions
- [x] Animations (entrance, exit, cursor interactions) using motion.dev

## Stack

- React, Next.js
- TypeScript, Zod
- motion.dev, tailwindcss
- radix-ui/primites, shadcn/ui
- react-hot-toast

## Input Combinations from `data/users.json`

The `data/users.json` file contains predefined user data for testing the Sign Up form.

- **Success:**
  - Email: joe@success.com
  - Password: Coffee2Go!
- **Delay:**
  - Email: joe@delay.com
  - Password: Coffee2Go!
- **Blocked Account:**
  - Email: joe@blocked.com
  - Password: Coffee2Go!
- **Blocked Domain**
  - Any yahoo.com email

Visit **'/logout'** to log out

## Deployment

The frontend is deployed at [lxgdemo.netlify.app](https://lxgdemo.netlify.app/)
