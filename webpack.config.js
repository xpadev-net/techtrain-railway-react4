import * as path from "path";

export default [{
	mode: "production",
	entry: { index: path.resolve("./src/main.tsx") },
	output: {
		path: path.resolve("./dist"),
		filename: "main.js",
		libraryTarget: "umd",
		globalObject: "this",
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: ["ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.scss/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							url: false,
							sourceMap: false,
							importLoaders: 2
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: false
						},
					},
				],
			},
			{
				test: /\.js$/,
				include: path.resolve("./src"),
				use: "babel-loader",
			},
		],
	},
},{
	entry: "./server/index.tsx",
	target: 'node',
	mode: "production",
	output: {
		path: path.resolve("./dist"),
		filename: "server.cjs",
		libraryTarget: "umd",
		globalObject: "this",
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: ["ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.scss/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							url: false,
							sourceMap: false,
							importLoaders: 2
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: false
						},
					},
				],
			},
			{
				test: /\.jsx?$/,
				include: path.resolve("./src"),
				use: "babel-loader",
			},
		]
	}
}];