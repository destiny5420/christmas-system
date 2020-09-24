module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/christmas-system/' : '/',
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: 'Christmas-v2 聖誕節抽抽樂系統',
    },
  },
};
