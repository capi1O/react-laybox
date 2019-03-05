const path = require('path');

module.exports =
{
	entry: './src/index.js',
	output:
	{
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	module:
	{
		rules:
		[
			// JS + JSX loader => babel-loader
			{
				test: [/\.js$/, /\.jsx$/],
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: 'babel-loader'
				},
				resolve: { extensions: ['.js', '.jsx'] }
			},
			// SCSS loader => sass-loader
			{
				test: /\.scss$/,
				use:
				[
					{ loader: 'style-loader' }, // creates style nodes from JS strings
					{ loader: 'css-loader', options: { modules: true } }, // translates CSS into CommonJS
					{ loader: 'sass-loader' } // compiles Sass to CSS, using Node Sass by default
				],
				resolve: { extensions: ['.scss'] }
			}
		]
	},
	resolve:
	{
		modules: [path.resolve(__dirname, 'src'), 'node_modules']
	},
	externals:
	{
		react: 'commonjs react'
	}
};
