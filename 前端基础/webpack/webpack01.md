起步，参考https://doc.webpack-china.org/guides/getting-started/

npm install --save-dev webpack,新建一个webpack.config.js文件

    var path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      }
    };

管理资源，参考https://doc.webpack-china.org/guides/asset-management/

加载css: npm install --save-dev style-loader css-loader,webpack添加rules

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    }

加载图片: npm install --save-dev file-loader,webpack添加rules

    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }

添加字体，添加rules,之后就可以通过font-face自定义字体

    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }

    @font-face {
      font-family: 'MyFont';
      src:  url('./my-font.woff2') format('woff2'),
            url('./my-font.woff') format('woff');
      font-weight: 600;
      font-style: normal;
    }

    .hello {
      color: red;
      font-family: 'MyFont';
      background: url('./icon.png');
    }

除此以外还有些冷门的比如npm install --save-dev csv-loader xml-loader

    {
      test: /\.(csv|tsv)$/,
      use: [
        'csv-loader'
      ]
    },
    {
      test: /\.xml$/,
      use: [
        'xml-loader'
      ]
    }

全局资源： 我们的资源可以分散在各个文件夹通过路径来访问，不用集中丢在assets里。有利于组件开发