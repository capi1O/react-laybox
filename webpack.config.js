const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack config squeleton
const config =
{
	module: {},
	resolve: {}
};

const rules = (sourceDirs) =>
	[
		// JS + JSX loader => babel-loader
		{
			test: [/\.js$/, /\.jsx$/],
			include: sourceDirs,
			exclude: /(node_modules|build)/,
			use: { loader: 'babel-loader' },
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
	];

module.exports = (env, argv) =>
{
	// demo
	if (env === 'demo')
	{
		config.entry = path.join(__dirname, 'demo/src/index.js');

		config.module.rules = rules([path.resolve(__dirname, 'src'), path.resolve(__dirname, 'demo/src')]);

		config.resolve.modules = [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'demo/src'), 'node_modules'];

		// inject script reference to the bundle output in index.html
		const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: path.join(__dirname, 'demo/src', 'index.html'), filename: './index.html' });
		config.plugins = [htmlWebpackPlugin];

		if (argv.mode === 'development') config.devServer = { port: 3001 };

		if (argv.mode === 'production')
		{
			config.output =
			{
				path: path.resolve(__dirname, 'demo/build'),
				filename: 'bundle.js'
			};
		}
	}

	// module
	else
	{
		config.entry = path.join(__dirname, 'src/react-laybox.js');

		config.module.rules = rules([path.resolve(__dirname, 'src')]);

		config.resolve.modules = [path.resolve(__dirname, 'src'), 'node_modules'];

		config.output =
		{
			path: path.resolve(__dirname, 'build'),
			filename: 'index.js',
			libraryTarget: 'commonjs2'
		};

		config.externals =
		{
			react: 'commonjs react'
		};
	}

	return config;
};
