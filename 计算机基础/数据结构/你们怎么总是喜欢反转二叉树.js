// 我们先来画一颗二叉树
//              1
//        2               3
//    4     5         6      7
//   8 9  10 11     12 13   14 15
// var bineryTree = {
//   value : 1,
//   left: {
//     value: 2,
//     left: {
//       value: 4,
//       left: {
//         value: 8
//       },
//       right: {
//         value: 9
//       }
//     },
//     right: {
//       value: 5,
//       left: {
//         value: 10
//       },
//       right: {
//         value: 11
//       }
//     }
//   },
//   right: {
//     value: 3,
//     left: {
//       value: 6,
//       left: {
//         value: 12
//       },
//       right: {
//         value: 13
//       }
//     },
//     right: {
//       value: 7,
//       left: {
//         value: 14
//       },
//       right: {
//         value: 15
//       }
//     }
//   }
// }


function bineryTree() {}
bineryTree.prototype = {
  revert: function(tree) {
    if (tree) {
      tree.left ? this.revert(tree.left) : null
      tree.right ? this.revert(tree.right) : null
    }
    var temp = tree.left
    tree.left = tree.right
    tree.right = temp
    return tree
  }
}