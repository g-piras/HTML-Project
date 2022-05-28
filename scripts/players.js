
//toggle - menu a tendina




let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
    menu.classList.toggle("menu--open");
});



//click arrow to scroll down by 508px

let arrow = document.querySelector(".bottom-arrow");
arrow.addEventListener("click", function () {
    window.scrollTo(0, 600);
});






// Hide menu on scroll

let lastScrollTop = 0;

let menuHidden = document.querySelector(".header");
let arrowDown = document.querySelector(".arrow-down");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        menuHidden.style.top = "-100px";
        
    } else {
        menuHidden.style.top = "0";
        
    }

    lastScrollTop = scrollTop;
})



// fa comparire la freccia quando l'header si nasconde

window.addEventListener("scroll", function () {
    if (menuHidden.style.top == "-100px") {
        arrowDown.classList.add("visible");

    } else {
        arrowDown.classList.remove("visible");
    }
})




// se il menu è nascosto e lo "clicki" torna giù

window.addEventListener("click", function () {
    menuHidden.style.top = "0px";
})





























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

function generatePlayerInfo(jsonObj, playerName) {
  for (const teams of jsonObj) {
    for(const player of teams.players){
      if(player.name === playerName.innerText){
        document.getElementById("player-info-pfp").setAttribute("src", player.profilePicURL);
        document.getElementById("player-info-name").innerText = player.name;
        document.getElementById("player-info-code").innerText = player.gamerTag;
        document.getElementById("player-info-bio").innerText = player.bio;
        document.getElementById("player-info-age").innerText = player.age;
        document.getElementById("player-info-experience").innerText = player.yearsOfXP;
        document.getElementById("player-info-nationality").setAttribute("src", player.nationalityURL);
        tournaments = document.getElementsByClassName("player-info-tournament");
        for(let i = 0; i < tournaments.length; i++){
          if(i < player.tournaments.length){
            tournaments[i].innerText = player.tournaments[i];
          }
          else{
            tournaments[i].innerText = "";
          }
        }
      }
    }
  }
}

readTextFile(
  "https://jsonblob.com/api/jsonBlob/979126680807555072",
  function (text) {
    let jsonData = JSON.parse(text);
    printTeams(jsonData);
    document.getElementsByClassName("close-profile")[0].addEventListener("click", function(){
      document.getElementById("selected-player-container").className =
        "player-inactive";
        document.body.style.overflow = "visible";
    });

    document.getElementById("empty-div").addEventListener("click", function(){
      document.getElementById("selected-player-container").className =
        "player-inactive";
        document.body.style.overflow = "visible";
    });
    let playerNames = document.getElementsByClassName("player-name");
    const players = document.getElementsByClassName("player-list-item");
    for (let i = 0; i < players.length; i++) {
      players[i].addEventListener("click", function () {
        generatePlayerInfo(jsonData, playerNames[i]);
        document.getElementById("selected-player-container").className =
          "player-active";
          document.body.style.overflow = "hidden";
      });
      window.addEventListener("scroll", function () {
        let playerName = playerNames[i];
        playerName.style.removeProperty("opacity");
        let targetPosition = playerName.getBoundingClientRect().top;
        let screenPosition;
        
        screenPosition = window.innerHeight/1.1;
        if (targetPosition < screenPosition) {
          playerName.className = "player-name";
        } else {
          playerName.className = "player-name hidden";
        }
      });
    }
  }
);
