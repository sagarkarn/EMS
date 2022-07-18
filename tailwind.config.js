/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {},
        colors: {
            primary: "#FF9B44",
            muted: "#8E8E8E",
            white: "#FFF",
        },
    },
    plugins: [],
};
