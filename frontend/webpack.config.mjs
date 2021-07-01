import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';

const distFolderPath = path.resolve('./dist');

export default {
  entry: {
    main: path.resolve('./src/main.ts'),
    'main.es5': path.resolve('./src/main.es5.ts')
  },
  devtool: 'inline-source-map',
  output: {
    clean: true,
    filename: '[name].js',
    path: distFolderPath,
    environment: {
      arrowFunction: false,
    },
  },
  devServer: {
    contentBase: distFolderPath,
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'css-loader',
          options: {
            url: false
          },
        }, 'postcss-loader'],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public' },
      ],
    }),
    // @todo: add DefinePlugin
  ]
};
