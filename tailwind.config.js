module.exports = {
    content: ['./index.html', './src/**/*.{html,js}'],
    theme: {
        extend: {
            backgroundImage: {
                'glow-ellipse-gradient': 'radial-gradient(ellipse 80% 60% at center, #00bddd 0%, transparent 70%)',
                'glow-ellipse-gradient-2': 'radial-gradient(ellipse 53.33% 53.33% at 50.00% -26.67%, rgba(45, 202, 255, 0.10) 0%, rgba(125.35, 222.28, 255, 0.03) 74%)',
                'fade-green-gradient': 'linear-gradient(to bottom, rgba(9,135,108,0.1) 32.15%, rgba(15,237,190,0.25) 100%)',
            },
            borderWidth: {
                'xs': '0.5px',
            },
            boxShadow: {
                'soft': '0 2px 6px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.4), 0px -1px 1px 0px rgba(250,250,250,0.5)'
            }
        },
    },
    plugins: [],
};