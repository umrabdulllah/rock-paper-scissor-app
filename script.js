let game = JSON.parse(localStorage.getItem("gameScore"));
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
  localStorage.setItem("gameScore", JSON.stringify(game));
  document.querySelector(".result").innerHTML = "RESULT";
  document.querySelector(".result").setAttribute("style", "color: #7a7c89");
  updateScore(game);
}
