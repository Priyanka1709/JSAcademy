module.exports= {
	entry: "./src/main.js",
	output: {
		path: __dirname,
		filename: "./dist/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
}