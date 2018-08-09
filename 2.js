const eg = [1, 2, 3, 4, 5]

let acc = null
for (i in eg) {
  if (!acc) {
    acc = eg[i]
  } else {
    acc = acc * eg[i]
  }
}

const newArr = []
for (x in eg) {
  newArr.push(acc / eg[x])
}

console.log(newArr)
