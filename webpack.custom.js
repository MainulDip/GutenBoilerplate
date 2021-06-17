const path = require('path')
const defaultConfig = require('@wordpress/scripts/config/webpack.config')

module.exports = {
  ...defaultConfig,
  entry: {
    index: path.resolve(__dirname, 'src', 'index.tsx')
  },
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
      // For Tailwind Include postcss config
    ]
  },
  resolve: {
    ...defaultConfig.resolve,
    extensions: ['.tsx', '.ts', 'js', 'jsx']
  }
}
