declare module 'craco-less' {
  type overrideWebpackConfig = ({ context, webpackConfig, pluginOptions }: {
    context: any;
    webpackConfig: any;
    pluginOptions: any;
  }) => any
  type overrideJestConfig = ({ context, jestConfig }: {
    context: any;
    jestConfig: any;
  }) => any
  type cracoLessType = {
    overrideWebpackConfig: overrideWebpackConfig
    overrideJestConfig: overrideJestConfig
  }
  export = cracoLessType
}