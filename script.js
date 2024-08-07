let game = JSON.parse(localStorage.getItem("gameScore"));
let isPlaying = false;
let interval;
if (!game) {
  game = {
    win: 0,
    loss: 0,
    tie: 0,
  };
}
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorBtn = document.querySelector(".scissor-btn");

rockBtn.addEventListener("click", () => {
  playGame("rock");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    playGame("rock");
    rockBtn.classList.add("move-btn-active");
    setTimeout(() => {
      rockBtn.classList.remove("move-btn-active");
    }, 200);
  }
});

paperBtn.addEventListener("click", () => {
  playGame("paper");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "p" || event.key === "P") {
    playGame("paper");
    paperBtn.classList.add("move-btn-active");
    setTimeout(() => {
      paperBtn.classList.remove("move-btn-active");
    }, 200);
  }
});

scissorBtn.addEventListener("click", () => {
  playGame("scissor");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "s" || event.key === "S") {
    playGame("scissor");
    scissorBtn.classList.add("move-btn-active");
    setTimeout(() => {
      scissorBtn.classList.remove("move-btn-active");
    }, 200);
  }
});

document.querySelector(".win").innerHTML = `Wins: ${game.win}`;
document.querySelector(".loss").innerHTML = `Loss: ${game.loss}`;
document.querySelector(".tie").innerHTML = `Tie: ${game.tie}`;

function playGame(move) {
  const randMove = Math.random();

  if (move === "rock") {
    if (randMove > 0 && randMove <= 1 / 3) {
      game.win++;
      winAction(move);
    } else if (randMove > 1 / 3 && randMove <= 2 / 3) {
      game.loss++;
      lossAction(move);
    } else if (randMove > 2 / 3 && randMove <= 1) {
      game.tie++;
      tieAction(move);
    }
  } else if (move === "paper") {
    if (randMove > 0 && randMove <= 1 / 3) {
      game.win++;
      winAction(move);
    } else if (randMove > 1 / 3 && randMove <= 2 / 3) {
      game.loss++;
      lossAction(move);
    } else if (randMove > 2 / 3 && randMove <= 1) {
      game.tie++;
      tieAction(move);
    }
  } else if (move === "scissor") {
    if (randMove > 0 && randMove <= 1 / 3) {
      game.win++;
      winAction(move);
    } else if (randMove > 1 / 3 && randMove <= 2 / 3) {
      game.loss++;
      lossAction(move);
    } else if (randMove > 2 / 3 && randMove <= 1) {
      game.tie++;
      tieAction(move);
    }
  }
  updateScore(game);
}

function updateScore(score) {
  localStorage.setItem("gameScore", JSON.stringify(score));
  document.querySelector(".win").innerHTML = `Wins: ${score.win}`;
  document.querySelector(".loss").innerHTML = `Loss: ${score.loss}`;
  document.querySelector(".tie").innerHTML = `Tie: ${score.tie}`;
}

function winAction(myMove) {
  document.querySelector(".result").innerHTML = "You Won";
  document.querySelector(".result").setAttribute("style", "color: #309847");
  if (myMove === "rock") {
    document.querySelector(".my-emoji").innerHTML = "✊";
    document.querySelector(".computer-emoji").innerHTML = "✌️";
  } else if (myMove === "paper") {
    document.querySelector(".my-emoji").innerHTML = "🖐️";
    document.querySelector(".computer-emoji").innerHTML = "✊";
  } else {
    document.querySelector(".my-emoji").innerHTML = "✌️";
    document.querySelector(".computer-emoji").innerHTML = "🖐️";
  }
}

function lossAction(myMove) {
  document.querySelector(".result").innerHTML = "You Lost";
  document.querySelector(".result").setAttribute("style", "color: #C53535");
  if (myMove === "rock") {
    document.querySelector(".my-emoji").innerHTML = "✊";
    document.querySelector(".computer-emoji").innerHTML = "🖐️";
  } else if (myMove === "paper") {
    document.querySelector(".my-emoji").innerHTML = "🖐️";
    document.querySelector(".computer-emoji").innerHTML = "✌️";
  } else {
    document.querySelector(".my-emoji").innerHTML = "✌️";
    document.querySelector(".computer-emoji").innerHTML = "✊";
  }
}

function tieAction(myMove) {
  document.querySelector(".result").innerHTML = "TIED";
  document.querySelector(".result").setAttribute("style", "color: #ff5d03");
  if (myMove === "rock") {
    document.querySelector(".my-emoji").innerHTML = "✊";
    document.querySelector(".computer-emoji").innerHTML = "✊";
  } else if (myMove === "paper") {
    document.querySelector(".my-emoji").innerHTML = "🖐️";
    document.querySelector(".computer-emoji").innerHTML = "🖐️";
  } else {
    document.querySelector(".my-emoji").innerHTML = "✌️";
    document.querySelector(".computer-emoji").innerHTML = "✌️";
  }
}

document.querySelector(".reset-btn").addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  game.win = 0;
  game.loss = 0;
  game.tie = 0;
  if (isPlaying) {
    document.querySelector(".auto-play").innerText = "Auto Play";
    clearInterval(interval);
    isPlaying = false;
  }
  localStorage.setItem("gameScore", JSON.stringify(game));
  document.querySelector(".result").innerHTML = "RESULT";
  document.querySelector(".result").setAttribute("style", "color: #7a7c89");
  updateScore(game);
}

document.querySelector(".auto-play").addEventListener("click", () => {
  autoPlay();
});
function autoPlay() {
  if (isPlaying) {
    document.querySelector(".auto-play").innerText = "Auto Play";
    clearInterval(interval);
    isPlaying = false;
  } else {
    document.querySelector(".auto-play").innerText = "Stop";
    isPlaying = true;
    interval = setInterval(() => {
      let randNum = Math.random();
      if (randNum <= 1 / 3) {
        document.querySelector(".rock-btn").classList.add("move-btn-active");
        playGame("rock");
        setTimeout(() => {
          document
            .querySelector(".rock-btn")
            .classList.remove("move-btn-active");
        }, 800);
      } else if (randNum > 1 / 3 && randNum <= 2 / 3) {
        document.querySelector(".paper-btn").classList.add("move-btn-active");
        playGame("paper");
        setTimeout(() => {
          document
            .querySelector(".paper-btn")
            .classList.remove("move-btn-active");
        }, 800);
      } else if (randNum > 2 / 3) {
        document.querySelector(".scissor-btn").classList.add("move-btn-active");
        playGame("scissor");
        setTimeout(() => {
          document
            .querySelector(".scissor-btn")
            .classList.remove("move-btn-active");
        }, 800);
      }
    }, 1000);
  }
}
