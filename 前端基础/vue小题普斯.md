vue给props传默认值对象不能直接给空对象或者空数组，需要包一层。。

`
props: {
  options: {
    type: Object,
    default: () => {} //数组就是() => []
  }
},
`

写样式的时候绝对不能出现不加scope，样式最外面不包一层并且使用短类名的行为