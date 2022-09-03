/*-------------------------------- Constants --------------------------------*/

const squareEls = document.querySelector("block")
const messageEl = document.querySelector("#message")

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

//// const section = document.quertSelector("board")
//// const = document.quertSelector("")
console.log(squareEls)
console.log(messageEl)


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init ()

function init() {
  let board = [null, null, null, null, null, null, null, null, null,]
  let turn = 1
  let Winner = null
  render ()
}
// console.log(init)


function render() {
  board.forEach(function(value, index) {
    if (value === 1) { 
      squareEls[index].innnerText = " X "
    } else if (value === -1) {
      squareEls[index].innnerText = " O "
    } else (value === null)
      squareEls[index].innnerText + " "
}

    if (winner === null) {
      messageEl.textContent = "It is Player ${turn}'s turn."
  } else if (winner === 'T') {
    messageEl.textContent = "The game is a tie!"
  } else {
    messageEl.textContent = "Congrats! Player ${winner} is the winner!"
  }
}
