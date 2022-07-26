import * as path from "path";

export default {
	entry: "./server/index.js",
	target: 'node',
	mode: "production",
	output: {
		path: path.resolve("./dist"),
		filename: "server.cjs"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};