const cells = document.querySelectorAll(".cell");
const msg = document.querySelector("#msg");
const arr = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let isGameActive = true;

let xo = "X";

function handleCellClick(cell, index) {
  if (arr[index] !== "" || !isGameActive) {
    return;
  }
  cell.innerText = xo;
  arr[index] = xo;
  console.log(arr);

  winning();

  if (isGameActive) {
    xo = xo === "X" ? "O" : "X";
  }
}

function winning() {
  let roundWon = false;

  for (let i = 0; i < winningConditions.length; i++) {
    const conditions = winningConditions[i];
    const cellA = arr[conditions[0]];
    const cellB = arr[conditions[1]];
    const cellC = arr[conditions[2]];

    if (cellA === "" || cellB === "" || cellC === "") {
      continue;
    }

    if (cellA === cellB && cellB === cellC) {
      roundWon = true;
      break;
    }
  }

    if (roundWon) {
      msg.innerText = `Congratulation Player ${xo} won!`;
      isGameActive = false;
      return;
    }

    if (!arr.includes("")) {
      msg.innerText = "Match Draw";
      isGameActive = false;
    }
  
}

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleCellClick(cell, index))
});
