/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1C59FF",
            },
            backgroundImage: {
                blueGrid: "url('./src/assets/images/blue-grid.png')",
            },
            boxShadow: {
                pillShadow: "-1px -1px 1px #1C59FF",
                overallShadow: "1px 1px 18px rgba(0,0,0,0.1)",
            },
        },
    },
    plugins: [],
};
