import { defineConfig } from 'alita';

import MergeLessPlugin from 'antd-pro-merge-less';
import AntDesignThemePlugin from 'antd-theme-webpack-plugin';
import path from 'path';

export default defineConfig({
  appType: 'pc',
  // 这个值在 appts 中被 getKeepAlive 修改
  keepalive: [/./],
  antd: {},
  chainWebpack: (config) => {
    // if (process.env.NODE_ENV === 'production') {
    // 将所有 less 合并为一个供 themePlugin使用
    const outFile = path.join(__dirname, '../.temp/merge.less');
    const stylesDir = path.join(__dirname, '../src/');

    config.plugin('merge-less').use(new MergeLessPlugin(), [
      {
        stylesDir,
        outFile,
      },
    ]);

    config.plugin('ant-design-theme').use(AntDesignThemePlugin, [
      {
        antDir: path.join(__dirname, '../node_modules/antd'),
        stylesDir,
        varFile: path.join(
          __dirname,
          '../node_modules/antd/lib/style/themes/default.less',
        ),
        mainLessFile: outFile,
        // themeVariables: ['@primary-color',],
        indexFileName: 'index.html',
        generateOne: true,
        lessUrl:
          'https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js',
      },
    ]);
    // }
  },
});
