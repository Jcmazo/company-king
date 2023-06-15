const path = require('path');
const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@src': path.resolve(__dirname, 'src'),
  '@models': path.resolve(__dirname, 'src/models'),
  '@controllers': path.resolve(__dirname, 'src/controllers'),
  '@repositories': path.resolve(__dirname, 'src/repositories'),
  '@services': path.resolve(__dirname, 'src/services'),
});