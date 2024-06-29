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

function autoPlay() {
  if (isPlaying) {
    document.querySelector(".auto-play").innerText = "Auto Play";
    clearInterval(interval);
    isPlaying = false;
  } else {
    document.querySelector(".auto-play").innerText = "Stop";
    isPlaying = true;
    interval = setInterval(function () {
      let randNum = Math.random();
      if (randNum <= 1 / 3) {
        document.querySelector(".rock-btn").classList.add("move-btn-active");
        playGame("rock");
        setTimeout(function () {
          document
            .querySelector(".rock-btn")
            .classList.remove("move-btn-active");
        }, 800);
      } else if (randNum > 1 / 3 && randNum <= 2 / 3) {
        document.querySelector(".paper-btn").classList.add("move-btn-active");
        playGame("paper");
        setTimeout(function () {
          document
            .querySelector(".paper-btn")
            .classList.remove("move-btn-active");
        }, 800);
      } else if (randNum > 2 / 3) {
        document.querySelector(".scissor-btn").classList.add("move-btn-active");
        playGame("scissor");
        setTimeout(function () {
          document
            .querySelector(".scissor-btn")
            .classList.remove("move-btn-active");
        }, 800);
      }
    }, 1000);
  }
}
