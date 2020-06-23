const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        libraryTarget: "umd",
        library: "theme",
    },
    externals: ["react", "react-dom", "styled-components"],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    configFile: "tsconfig.json",
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
};
