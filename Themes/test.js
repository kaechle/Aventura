var node = require("node")
import node from "node"

// es5

node.app("callback", function (callbackData) {
  return callbackData.filter(function (call) {
    return call == call.subString(0, 15)
  })
})

// es6

if (constantVar == str) {
  obj.pop(nums)
  bool = !bool
  let newValue = compose(unfold(obj))
  pluckDeep(newValue)
  return newValue
}

node.app("callback", (callbackData) => callbackData.filter())

const constantVar = document.querySelector("#header")
var nums = 10 + 10 === 20
let str = "string"
let bool = true || (false && 10 >= 10)

const pluckDeep = (key) => (obj) =>
  key.split(".").reduce((accum, key) => accum[key], obj)

const compose =
  (...fns) =>
  (res) =>
    fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}

const obj = {
  key: [
    "array",
    {
      key: "value",
      int: 10,
      foo: "bar"
    }
  ]
}
