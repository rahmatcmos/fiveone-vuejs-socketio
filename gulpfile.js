var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.scripts([
        'vendor/jquery.js',
        'vendor/bootstrap.js',
        'vendor/vue.js',
        'vendor/vue-resource.js',
        'vendor/socket.io.js',
        'app.js'
    ], 'public/js/all.js');

    mix.styles([
        'vendor/bootstrap.css',
        'vendor/font-awesome.css',
        'vendor/animate.css',
        'style.css'
    ]);

    mix.version(["css/all.css", "js/all.js"]);
});