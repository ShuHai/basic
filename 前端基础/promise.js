let mmPromise = function(fn) {
  let callbacks = []
  let state = 'pending'
  let value = null
  this.then = function (cb) {
    if(state === 'pending'){
      callbacks.push(cb)
    }
    else{
      cb(value)
    }
    return this
  }
  function resolve(value) {
    value = newValue
    state = 'fulfilled'
    setTimeout(function () {
      callbacks.forEach(function(callback) {
        callback(value)
      })
    }, 0)
  }
  fn(resolve)
}