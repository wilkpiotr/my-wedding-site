

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
            }),
        require('css-mqpacker')(),
        require('postcss-utilities')
    ]
}