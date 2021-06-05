let mix = require('laravel-mix');

// Custom webpack config
mix.webpackConfig({
    resolve:{

    }
})

mix.js('src/js/app.js', 'public/js').setPublicPath('public');
