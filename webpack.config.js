const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');



let pathsToClean = [
  'dist'
]


module.exports = {
	//mode: 'development',
	entry: { main: './src/client/index.js', 
	//ttt: './src/client/TTT.js' við notum þetta liklegast svona til að byrja með, en //tharf ekki thegar eg er buinn ada importa TTT i index skrana 
	},
	output: {
		filename: '[name].js', // á ekki að breyta neinu að það sé name hérna nema þegar ég er með multiple files kemur error ef ég defina bara eitt nafn
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
	new HtmlWebpackPlugin({template: "./src/client/index.html", inject: 'body', /*hash: true,*/}),
	new CleanWebpackPlugin(pathsToClean)
	],

	devServer: { /// server dót
		port: 3000,
		open: true,
		proxy: {
		"/game/": "http://localhost:8080"
		}
	},
// þetta kemur seinna - tökum þetta út til að byrja með - en höldum þessu inni sem dependancy
	module: { ///css dót
    rules: [
      {
        test: /\.css$/,

        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  	},
}

