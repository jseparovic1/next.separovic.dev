module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            animation: {
                blink: "blink 0.9s infinite"
            },
            keyframes: {
                blink: {
                    '50%': {
                        opacity: 0.4
                    }
                }
            }
        },
    },
    variants: {},
    plugins: [],
}
