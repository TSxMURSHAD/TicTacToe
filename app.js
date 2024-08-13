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

let playerTurn = document.querySelector("#player");
let winner = document.querySelector(".turn");
function buttonToggle(id) {
  btn[id].addEventListener("click", () => {
    btn[id].innerHTML = player;
    btn[id].disabled = true;
    checkWin();
    player = player === "X" ? "O" : "X";
    playerTurn.innerHTML = player;
  });
}
function buttonDisable(id) {
  btn[id].disabled = true;
}
let checkWin = () => {
  for (let i = 0; i < win.length; i++) {
    let [a, b, c] = win[i];
    if (
      btn[a].innerHTML !== "-" &&
      btn[a].innerHTML === btn[b].innerHTML &&
      btn[b].innerHTML === btn[c].innerHTML
    ) {
      btn[a].classList.add("boxWin");
      btn[b].classList.add("boxWin");
      btn[c].classList.add("boxWin");
      winner.innerHTML = `${btn[a].innerHTML} wins`;
      for (let i = 0; i < 9; i++) {
        buttonDisable(i);
      }
      break;
    }
  }
};

for (let i = 0; i < 9; i++) {
  buttonToggle(i);
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  window.location.reload();
});
