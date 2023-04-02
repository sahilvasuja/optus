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
      "my-custom-class": {
        "@apply relative w-full h-screen bg-white": {},
      },
      "my-custom-div": {
        "@apply absolute w-706 h-966 left-33 top-29": {},
      },
      "my-custominner-div": {
        "@apply flex flex-col items-center p-0 gap-50 absolute w-554 h-812 left-76 top-88":
          {},
      },
      "my-header-div": {
        "@apply w-554 h-173 flex-none order-1": {},
        flexGrow: "0",
      },
      spacing: {
        57: "14.25rem",
        150: "37.5rem",
        202: "50.5rem",
      },
      borderRadius: {
        none: "0",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        52: "3.25rem",
      },
      lineHeight: {
        61: "3.8125rem",
      },
      colors: {
        "custom-black": "#222222",
      },
    },
  },
  variants: {},
  plugins: [optus, head, text, footer, foot],
  additional: {
    custom: {
      element: {
        height: "966px",
        width: "706px",
        left: "0px",
        top: "0px",
        borderRadius: "8px",
      },
    },
  },
};
