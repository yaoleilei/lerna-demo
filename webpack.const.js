module.exports = {
  PORT: process.env.PORT || 9003, // dev-server服务运行端口。默认主工程为9000，所以子工程端口最好为9001以上
  outputPath: 'build', // 项目打包目录, 必须为'build', talos指定上传目录见https://sky.sankuai.com/docs/hfe/delivery/quickStart/app.html
  useInlineStyle: false, // 样式是否以<style>插入到head中，设置true为<link>形式
  openBundleAnalyzer: false, // 是否开启打包日志分析，在生产环境下设置为true时生效
  APP_NAME: require('./package.json').name, // 子工程app名称，跟主工程microAppsConfig的key对应
};
