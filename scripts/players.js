let trophyIcon = "https://img.icons8.com/ios-glyphs/344/ffffff/trophy.png";

function generatePlayer(playerInfo, container) {
  let playerLi = document.createElement("li");
  playerLi.className = "player-list-item";
  container.appendChild(playerLi);

  let playerImage = document.createElement("img");
  playerImage.setAttribute("src", playerInfo.profilePicURL);
  playerImage.setAttribute("alt", playerInfo.gamerTag + " Profile Picture");
  playerLi.appendChild(playerImage);

  let playerTag = document.createElement("p");
  playerTag.className = "gamerTag";
  playerTag.innerText = playerInfo.gamerTag;
  playerLi.appendChild(playerTag);

  let playerName = document.createElement("p");
  playerName.className = "player-name hidden";
  playerName.style.opacity = 0;
  playerName.innerText = playerInfo.name;
  playerLi.appendChild(playerName);
}

function generateTeam(teamInfo, container) {
  let teamList = document.createElement("li");
  teamList.className = "team-list-item";
  container.appendChild(teamList);

  let teamBasicInfo = document.createElement("div");
  teamBasicInfo.className = "team-info";
  teamList.appendChild(teamBasicInfo);

  let teamName = document.createElement("p");
  teamName.innerText = teamInfo.team;
  teamBasicInfo.appendChild(teamName);

  let trophyIconImg = document.createElement("img");
  trophyIconImg.setAttribute("src", trophyIcon);
  trophyIconImg.setAttribute("alt", teamInfo.team + " wins");
  teamBasicInfo.appendChild(trophyIconImg);

  let teamWins = document.createElement("p");
  teamWins.innerText = teamInfo.wins;
  teamBasicInfo.appendChild(teamWins);

  let playerList = document.createElement("ul");
  teamList.appendChild(playerList);
  teamInfo.players.forEach((element) => {
    generatePlayer(element, playerList);
  });
}

function printTeams(json) {
  json.forEach((element) => {
    let sectionType;
    if (element.active) {
      sectionType = document.getElementsByClassName("teams")[0];
    } else {
      sectionType = document.getElementsByClassName("teams")[1];
    }
    generateTeam(element, sectionType);
  });
}

function readTextFile(file, callback) {
  let rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send();
}

function generatePlayerInfo(playerPos) {
    document.getElementById("selected-player-container")
}

readTextFile(
  "https://jsonblob.com/api/jsonBlob/979126680807555072",
  function (text) {
    let jsonData = JSON.parse(text);
    printTeams(jsonData);
    const players = document.getElementsByClassName("player-list-item");
    for (let i = 0; i < playerTags.length; i++) {
      players[i].addEventListener("click", function () {
        document.getElementById("selected-player-container").className =
          "player-active";
      });
      window.addEventListener("scroll", function () {
        let playerName = document.getElementsByClassName("player-name")[i];
        playerName.style.removeProperty("opacity");
        let targetPosition = playerName.getBoundingClientRect().top;
        let screenPosition;
        if (i < 5) {
          screenPosition = window.innerHeight / 1.7;
        } else if (i + 5 < playerTags.length) {
          screenPosition = window.innerHeight / 1.3;
        } else {
          screenPosition = window.innerHeight / 1;
        }
        if (targetPosition < screenPosition) {
          playerName.className = "player-name";
        } else {
          playerName.className = "player-name hidden";
        }
      });
    }
  }
);
