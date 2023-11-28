/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        libraryBannerImage: "url('/images/bookForLibrary.jpg')",
      },
    },
  },
  plugins: [],
};
