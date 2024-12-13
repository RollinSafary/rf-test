const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

// common configuration
const commonConfig = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Rule for SVG files
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: './index.html',
    }),
  ],
  entry: [path.resolve(__dirname, 'src/index.tsx')],
  output: {
    filename: '[name].[contenthash].js', // Use contenthash to avoid conflicts and for better caching
    chunkFilename: '[id].[contenthash].js', // Use contenthash for dynamic chunks
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
  },
  resolve: {
    alias: {
      reduxTypes: path.resolve(__dirname, 'src/redux-store/types/'),
      reduxSlices: path.resolve(__dirname, 'src/redux-store/slices/'),
      'redux-store': path.resolve(__dirname, 'src/redux-store/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      common: path.resolve(__dirname, 'src/components/common/'),
      layouts: path.resolve(__dirname, 'src/components/layouts/'),
      global: path.resolve(__dirname, 'src/components/global/'),
      hooks: path.resolve(__dirname, 'src/components/hooks/'),
      pages: path.resolve(__dirname, 'src/components/pages/'),
      components: path.resolve(__dirname, 'src/components/'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      api: path.resolve(__dirname, 'src/api'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
};

// Development Configuration
const devConfig = {
  mode: 'development',
  devtool: 'source-map', // Enable source maps for development
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve static files from the 'dist' folder
    },
    compress: true, // Enable gzip compression for everything served
    port: 3000, // Port to run the dev server
    hot: true, // Enable Hot Module Replacement
    open: false, // Don't automatically open browser on server start
    historyApiFallback: true, // Fallback to index.html for SPA routes
  },
  optimization: {
    runtimeChunk: 'single', // Helps with faster re-builds
  },
};

// Production Configuration
const prodConfig = {
  mode: 'production',
  devtool: 'source-map', // Use source maps for production (can use 'hidden-source-map' for better performance)
  optimization: {
    minimize: true, // Minimize the code for production
    splitChunks: {
      chunks: 'all', // Split code into separate chunks for better caching
    },
    moduleIds: 'deterministic', // Enable deterministic module IDs for better caching
    runtimeChunk: 'single', // Separate runtime for better caching
  },
  performance: {
    hints: 'warning', // Show performance hints in production
  },
};

// Merge configurations based on the build mode (development or production)
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return merge(commonConfig, devConfig);
  }

  if (argv.mode === 'production') {
    return merge(commonConfig, prodConfig);
  }

  return commonConfig; // Default to common config if no mode is specified
};
