/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00BCD4', // Cyan
                    hover: '#00ACC1',
                    light: '#4DD0E1',
                },
                secondary: {
                    DEFAULT: '#2D3748', // Dark Gray
                    dark: '#1A202C',
                    light: '#4A5568',
                },
                dark: {
                    900: '#111827',
                    800: '#1F2937',
                    700: '#374151',
                },
                light: {
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // You might want to add an Arabic font here later
            },
        },
    },
    plugins: [],
}
