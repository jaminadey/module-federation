const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const DashboardPlugin = require("@module-federation/dashboard-plugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:8080/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "ssc",
      filename: "remoteEntry.js",
      remotes: {        
        amendments: "amendments@http://localhost:8081/remoteEntry.js",
        ssc: "ssc@http://localhost:8080/remoteEntry.js",
        ssc_brand_x: "ssc_brand_x@http://localhost:8085/remoteEntry.js",
      },
      exposes: {
        "./PolicySummary": "./src/PolicySummaryContent",
        "./PolicySummaryCards": "./src/PolicySummaryCards",
        "./PolicyDetail": "./src/PolicyDetailContent",
        "./Hero": "./src/Hero",
        "./Frame": "./src/Frame",
        "./brandComponentResolver": "./src/brandComponentResolver",
        "./policies": "./src/policies",
        "./utils": "./src/utils"
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    // new DashboardPlugin({
    //   dashboardURL: "http://localhost:3000/api/update",
    //   metadata: {
    //     source: {
    //       url: "http://github.com",
    //     },
    //     remote: "http://localhost:8080/remoteEntry.js",
    //   },
    // }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
