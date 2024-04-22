// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(button|image|input|navbar|pagination|select|ripple|spinner|listbox|divider|popover|scroll-shadow).js"
].js"
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
