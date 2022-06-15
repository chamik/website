module.exports = {
    mode: 'jit',
    content: [
        './build/**/*.{js,html}',
        './_site/**/*.{js,html}',
        './src/**/*.{js,html}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Libre\ Franklin', 'sans-serif'],
                'mono': ['Roboto\ Mono', 'monospace'],
            },
            typography: {
                DEFAULT: {
                    css: {
                        ':where(blockquote p:first-of-type):not(:where([class~="not-prose"] *))::before': {
                            content: 'none',
                        },
                        ':where(blockquote p:last-of-type):not(:where([class~="not-prose"] *))::after': {
                            content: 'none',
                        },
                        ':where(code):not(:where([class~="not-prose"] *))::before': {
                            content: 'none',
                        },
                        ':where(code):not(:where([class~="not-prose"] *))::after': {
                            content: 'none',
                        }
                    }
                }
            },
            textUnderlineOffset: {
                6: '6px',
            },
            translate: {
                'bit': '0.10rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}