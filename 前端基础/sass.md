usage

npm install node-sass

允许嵌套写法

使用@import 引用其他sass文件 e.g @import 'main.sass'

允许使用变量，以$打头，比如$loveColor: #66ccff

关于Mixin的语法:

  @mixin opacity($opacity:50) {
    opacity: $opacity / 100
  }

  .opacity {
    @include opacity //使用默认参数50
  }

  .opacity80 {
    @include opacity(80) //使用默认参数50
  }

  当然我们也可以符合传参，少参数的情况会优先补全前面的参数，也可以指定传参比如传opacity($color: #66ccff)

  @mixin opacity($opacity:50,$color:red) {
    opacity: $opacity / 100
    color: $color
  }

  .opacity {
    @include opacity //使用默认参数50,50颜色
  }

  .opacity80 {
    @include opacity(80,blue)
  }