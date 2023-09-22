let input = 12
let xsToDraw = 1


for (let row = 0; row < input; row++) {
  drawXs(xsToDraw)
  xsToDraw++
}

// xsToDraw -= 2 BUG
for (let row = input; row >= 0; row--) {
  drawXs(xsToDraw)
  xsToDraw--
}

function drawXs(howMany) {
  let xs = "-"
  for (let i = 0; i < howMany; i++) {
    xs += "x"
  }
  console.log(xs)
}