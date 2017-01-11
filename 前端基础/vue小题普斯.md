vue给props传默认值对象不能直接给空对象或者空数组，需要包一层。。

`
props: {
  options: {
    type: Object,
    default: () => {} //数组就是() => []
  }
},
`