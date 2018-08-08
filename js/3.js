const assert = require('assert')
class Node {
  constructor(val, left, right) {
    ;(this.val = val), (this.left = left)
    this.right = right
  }
}

const deserialize = nodes => {
  return JSON.parse(nodes)
}

const serialize = nodes => {
  return JSON.stringify(nodes)
}

const tree = new Node(
  'root',
  new Node('left', new Node('left.left')),
  new Node('right'),
)

const s = serialize(tree)
assert(deserialize(s).left.left.val == 'left.left')
