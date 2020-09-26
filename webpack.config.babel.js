import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const mode = process.env.NODE_ENV === 'production' ?
  'production' : 'development'; 

export default {
  mode,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		modules: ['node_modules', './src']
  },
  module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
			hash: true,
			template: './public/index.html',
			filename: 'index.html',
			scriptLoading: 'defer'
		})
  ]
};