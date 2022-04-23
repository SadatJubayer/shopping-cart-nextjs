const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#C9AC60',
            },
            fontFamily: {
                serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [],
};
