const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack config squeleton
const config =
{
	module: {},
	resolve: {}
};

const rules = (sourceDirs, dev) =>
	[
		// JS + JSX loader => babel-loader
		{
			test: [/\.js$/, /\.jsx$/],
			include: sourceDirs,
			exclude: /(node_modules|build)/,
			use: { loader: 'babel-loader' },
			resolve: { extensions: ['.js', '.jsx', '.scss'] } // skip extensions in imports in js/jsx files
		},
		// SCSS loader => sass-loader
		{
			test: /\.scss$/,
			use:
			[
				{ loader: 'style-loader' }, // creates style nodes from JS strings
				{
					loader: 'css-loader', // translates CSS into CommonJS
					options:
					{
						modules: true,
						sourceMap: dev,
						localIdentName: '[path][name]__[local]'
					}
				},
				{ loader: 'postcss-loader' }, // CSS plugins like autoproefixer, see postcss.config.js
				{ loader: 'sass-loader', options: { sourceMap: dev } } // compiles Sass to CSS, using Node Sass by default
			],
			resolve: { extensions: ['.scss'] } // skip extension in imports in scss files
		}
	];

module.exports = (env, argv) =>
{
	const dev = argv.mode === 'development';
	const prod = argv.mode === 'production';

	// demo
	if (env === 'demo')
	{
		config.entry = path.join(__dirname, 'demo/src/index.js');

		config.module.rules = rules([path.resolve(__dirname, 'src'), path.resolve(__dirname, 'demo/src')], dev);

		config.resolve.modules = [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'demo/src'), 'node_modules'];

		// inject script reference to the bundle output in index.html
		const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: path.join(__dirname, 'demo/src', 'index.html'), filename: './index.html' });
		config.plugins = [htmlWebpackPlugin];

		if (dev) config.devServer = { port: 3001 };

		else if (prod)
		{
			config.output =
			{
				path: path.resolve(__dirname, 'demo/build'),
				filename: 'bundle.js'
			};
		}

		else console.error(argv.mode !== '' ? `incorrect mode : ${argv.mode}` : 'mode unset');
	}

	// module
	else
	{
		config.entry = path.join(__dirname, 'src/react-laybox.js');

		config.module.rules = rules([path.resolve(__dirname, 'src')], dev);

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
