# Metal Plate Configurator
---
<img src="./public/logo-metal.png" alt="logo" width="200" />

## Type of project: **TEST WEB APP**
## Tools: **AWS Amplify, React.js, Vite, Tailwind CSS, Daisy UI, TypeScript**
## Soft: **VSCode, GitHub, Git Bash**
---
## Task
 - create a web application where users can design a customizable metal plate. The app should be built using React and AWS Amplify.
 - Develop a web app that allows users to configure a metal plate by choosing the following:
     -  Length and width (in cm or mm)
     - Color (e.g. raw steel, black, galvanized, painted, etc.)
 - You don’t need to implement a real backend for pricing or ordering, but the app should simulate the configuration process in a way that feels like a realistic frontend of an online shop.

---
## Local Development 
Project was created from AWS template "amplify-vite-react-template" and due to documentation <a href="https://docs.amplify.aws/react/start/quickstart">Amplify QuickStart</a>.
For start project in local development need:
  - in terminal run command: <code>npx ampx sandbox</code> for backend in sandbox;
  - in another terminal run command: <code>npm run dev</code> for interface;

## Project Description
In this aplication we have Authentication, protected routes (login require), mobile devices adaptation. Interface have only one route "/" with Metal Plate Configurator.
Here user can choose Length, Width, MM/CM and color due to instructions. We also add some additional information and preview for better understanding what product user choose and for more comfortable usage. 
We make simulation of online shop, so products have some price and aplication has Cart component. In cart component user can add more products, reduce or remove from cart product. 
For Cart logic we use React Context. When user like to proceed with payment we just show in console.log object with data that will be sending to API. 
Also in header we show Logo, Email of user, Cart button and Logout button. For mobile version in header will be just Logo and Burger Menu button where will be located all other components.
If user try to go to some route that not exist like "/tetsgdhd" he will be redirect to main page of aplication or to login page, depending of Authentication State (login or not).
