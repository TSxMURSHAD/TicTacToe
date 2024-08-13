let btn = document.querySelectorAll(".box");
let player = "X";
let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let n = 0;
let reset = document.querySelector("#reset");
let playerTurn = document.querySelector("#player");
let winner = document.querySelector(".turn");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    n++;
    button.innerHTML = player;
    button.disabled = true;
    player = player === "X" ? "O" : "X";
    playerTurn.innerHTML = player;
    if (n === 9) {
      winner.innerHTML = "Game DRAW";
      reset.innerHTML = "Play Again";
    }
    checkWin();
  });
});
let checkWin = () => {
  win.forEach((pattern) => {
    let [a, b, c] = pattern;
    if (
      btn[a].innerHTML !== "-" &&
      btn[a].innerHTML === btn[b].innerHTML &&
      btn[b].innerHTML === btn[c].innerHTML
    ) {
      btn[a].classList.add("boxWin");
      btn[b].classList.add("boxWin");
      btn[c].classList.add("boxWin");
      winner.innerHTML = `${btn[a].innerHTML} wins`;
      btn.forEach((button) => {
        button.disabled = true;
      });
      reset.innerHTML = "Play Again";
    }
  });
};

reset.addEventListener("click", () => {
  window.location.reload();
});
