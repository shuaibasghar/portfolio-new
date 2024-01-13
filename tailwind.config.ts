/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    10: "#84cc16",
                },
                gray: {
                    10: "#EEEEEE",
                    20: "#A2A2A2",
                    30: "#7B7B7B",
                    50: "#585858",

                    100: "#e5e7eb",
                },
                orange: {
                    50: "#FF814C",
                },
                blue: {
                    10: "#1d4ed8",
                    20: "#dbeafe",
                    30: "#93c5fd",
                },
                yellow: {
                    50: "#FEC601",
                },
            },
            backgroundImage: {
                "bg-img-1": "url('/img-1.png')",
                "bg-img-2": "url('/img-2.png')",
                "feature-bg": "url('/feature-bg.png')",
                pattern: "url('/pattern.png')",
                "pattern-2": "url('/pattern-bg.png')",
                expertise: "url('/bg-expert')",
            },
            screens: {
                xs: "400px",
                "3xl": "1680px",
                "4xl": "2200px",
            },
            maxWidth: {
                "10xl": "1512px",
            },
            borderRadius: {
                "5xl": "40px",
            },
        },
    },
    plugins: [],
};
