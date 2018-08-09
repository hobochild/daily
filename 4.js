const assert = require('assert')
const arr = [3, 4, -1, 1]
const arr2 = [1, 2, 0]

const getMax = numbers => {
  const max = Math.max.apply(null, numbers)

  for (step = 1; step < max; step++) {
    if (!numbers.includes(step)) {
      return step
    }
  }

  return max + 1
}

assert(getMax(arr) == 2)
assert(getMax(arr2) == 3)
