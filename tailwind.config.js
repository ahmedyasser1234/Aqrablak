/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
];
export const theme = {
    extend: {
        animation: {
            'orbit': 'orbit 20s linear infinite',
            'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
            orbit: {
                '0%': { transform: 'translate(-50%, -50%) rotate(0deg) translateX(200px) rotate(0deg)' },
                '100%': { transform: 'translate(-50%, -50%) rotate(360deg) translateX(200px) rotate(-360deg)' },
            },
            float: {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-20px)' },
            }
        },
        boxShadow: {
            'glow': '0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.3)',
        }
    },
};
export const plugins = [];