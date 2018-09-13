const sass = require('@stencil/sass');

exports.config = {
  bundles: [
    { components: ['product-card', 'navigation-component'] }
  ],
  buildDir: 'assets/build',
  collections: [
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}