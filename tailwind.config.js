/** @type {import('tailwindcss').Config} */

const optus = require("./tailwind.optus");
const head = require("./tailwind.head");
const text = require("./tailwind.text");
const footer = require("./tailwind.footer");
const foot = require("./tailwind.foot");

// const customComponents = require("/custom.css");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
    
    },
  },
  variants: {},
  plugins: [],
 
};
