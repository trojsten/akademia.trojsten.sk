/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "layouts/**/*.html",
        "assets/**/*.js",
        "content/**/*",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#ee3934",
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

