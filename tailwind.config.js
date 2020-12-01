module.exports = {
    purge: [],
    theme: {
        extend: {
            animation: {
                blink: "blink 0.8s infinite",
                wiggle: "wiggle 0.6s infinite"
            },
            keyframes: {
                blink: {
                    '50%': {
                        opacity: 0.4
                    }
                },
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(1deg)'
                    },
                    '50%': {
                        transform: 'rotate(-1deg)'
                    }
                }
            }
        },
    },
    variants: {
        extend: {
            animation: ['hover'],
        },
        plugins: [],
    }
}
