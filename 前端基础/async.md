一个小demo,试试把await去掉

    delay(x,y) {
      console.log('这是一个新的开始',x)
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('结束咯',x)
          resolve(x)
        }, y)
      })
    },
    async add1() {
      let a = this.delay(10, 10000)
      let b = this.delay(5, 1000)
      return 1 +  await a +  await b
    }

    this.add1().then(res => {
      console.log(res)
      console.log('get')
      this.delay(2,300)
    })
    this.delay(1,100)

再试试

     async add1() {
       let a = await this.delay(10, 10000)
       let b = await this.delay(5, 1000)
       return 1 + a + b
     }
