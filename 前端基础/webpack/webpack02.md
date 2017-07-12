管理输出

npm install --save-dev html-webpack-plugin
会在dist里面生成他自己的index.html文件

npm install clean-webpack-plugin --save-dev

    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Output Management',
        filename: 'index.html',
        template: 'src/index.html'
      })
    ]

清理dist文件夹

The Manifest 使用WebpackManifestPlugin

开发

npm install --save-dev webpack-dev-server(注意src里面需要一个index文件)
npm install --save-dev express webpack-dev-middleware(node中间键用)

热替换，占坑