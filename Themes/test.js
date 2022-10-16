var node = require("node")
import node from "node"

// es5

node.app("callback", function (callbackData) {
  return callbackData.filter(function (call) {
    return call == call.subString(0, 15)
  })
})

// es6

node.app("callback", (callbackdata) => callbackData.filter())

const constantVar = document.querySelector("#header")
var nums = 10 + 10 === 20
let str = "string"
let bool = true || (false && 10 >= 10)

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
