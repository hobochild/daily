const example = [15, 3, 7, 10]
const e = 17

const addUpTo = (arr, k) => {
  for (n in arr) {
    for (x in arr) {
      console.log(arr[x], arr[n])
      if (arr[x] + arr[n] == k) {
        return true
      }
    }
  }
  return false
}

console.log(addUpTo(example, e))
