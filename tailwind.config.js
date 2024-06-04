/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStops: {
        salmon: "var(--salmon)",
        "medium-purple": "var(--medium-purple)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(228deg, var(--salmon), var(--medium-purple))",
      },
      textColor: {
        "gradient-text": {
          backgroundClip: "text",
          textFillColor: "transparent",
          backgroundImage:
            "linear-gradient(228deg, var(--salmon), var(--medium-purple))",
        },
      },
    },
  },
  plugins: [],
};
