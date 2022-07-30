const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './node_modules/tw-elements/dist/js/**/*.js',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/sass/**/*.scss',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        require('tw-elements/dist/plugin'),
        require('@tailwindcss/forms')
    ],
};
