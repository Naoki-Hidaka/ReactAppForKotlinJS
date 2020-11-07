{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/hidakanaoki/Applications/Kotlin_JS/KotlinJsFirstProject/build/js/packages/KotlinJsFirstProject/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/hidakanaoki/Applications/Kotlin_JS/KotlinJsFirstProject/build/js/packages/KotlinJsFirstProject/kotlin-dce-dev/KotlinJsFirstProject.js'
    ]
  },
  output: {
    path: '/Users/hidakanaoki/Applications/Kotlin_JS/KotlinJsFirstProject/build/distributions',
    filename: [Function: filename],
    library: 'KotlinJsFirstProject',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/Users/hidakanaoki/Applications/Kotlin_JS/KotlinJsFirstProject/build/processedResources/js/main'
    ]
  }
}