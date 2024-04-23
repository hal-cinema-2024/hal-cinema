// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(button|image|input|navbar|pagination|radio|select|ripple|spinner|listbox|divider|popover|scroll-shadow).js",
  ],
  darkMode: "class",
  plugins: [nextui()],
};
