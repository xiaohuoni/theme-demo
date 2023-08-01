# antd 系列的动态主题 demo

## antd-theme

antd@4  使用的是 css 变量切换，需注意 ie 不支持 css 变量

## antd-theme-less

antd@4 提前用 webpack 插件编译了所有的 less 文件，在运行时使用 less 方法编译，缺点，切换时耗时，在 ie 上要很长时间

## antd-theme-class

antd@4 使用类名覆盖，要求知道组件的所有层级结构，优点兼容ie ，变动最小，对于不更新的组件，好处较多。

## mobile5-theme

antd-mobile@5 使用 css 变量切换
