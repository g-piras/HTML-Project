# Esports-01

## Final target

Create a website with various areas that display information about an Esports league,
its tournaments, teams and players

#

## Requirements

**_Structure and behavior_**

Create a website about an Esports league

The website should have at least the following areas:

    ● homepage
    ● news page
    ● tournaments
    ● players
    ● join us (player application page)
    ● gallery
    ● about (about the league)

**_General_**

All pages should include:

    ● the league's name and logo
    ● main navigation (switching between different pages/areas)
    ● secondary navigation (jumping to different sections in the same page

#

## Approach to solution

We started thinking about how to divide pages and work.... Eloise pensaci tu

#

## File

HTML-Project/  
┣ .vscode/  
┃ ┗ settings.json  
┣ Contents/  
┃ ┣ img/  
┃ ┃ ┣ articles img/  
┃ ┃ ┣ gallery-img/  
┃ ┃ ┣ trophies-logos/  
┃ ┃ ┣ banner.png  
┃ ┃ ┣ Dev_Blog_5_VAL_esports_graphic_rev.jpeg  
┃ ┃ ┣ favicon.ico  
┃ ┃ ┣ logo-red-white.png  
┃ ┃ ┣ news-valorant-msi-mga-dragon-cup-winter-2021-tournament-announced-3.webp  
┃ ┃ ┣ pngegg.png  
┃ ┃ ┣ red-black-logo.png  
┃ ┃ ┣ Spike_Rush_Banner.jpg  
┃ ┃ ┣ teams.jpg  
┃ ┃ ┣ tournaments.jpg  
┃ ┃ ┗ transparent-red-logo2.png  
┃ ┣ json/  
┃ ┃ ┗ [players.json](./../Contents/json/players.json)  
┃ ┣ video/  
┃ ┃ ┗ intro-video_Trim.mp4  
┃ ┗ LINEE GUIDA.md  
┣ Esport/  
┃ ┗ Contents/  
┣ README/  
┃ ┗ [readme.md](./readme.md)  
┣ scripts/  
┃ ┣ [index.js](./../scripts/index.js)  
┃ ┣ [main.js](scripts/main.js)  
┃ ┗ [players.js](./../scripts/players.js)  
┣ Style/  
┃ ┣ [form.css](./../Style/form.css)  
┃ ┣ [gallery.css](./../Style/gallery.css)  
┃ ┣ [news.css](./../Style/news.css)  
┃ ┣ [players.css](./../Style/players.css)  
┃ ┣ [style.css](./../Style/style.css)  
┃ ┗ [tournaments.css](./../Style/tournaments.css)  
┣ [form.html](./../form.html)  
┣ [form.php](./../form.php)  
┣ [gallery.html](./../gallery.html)  
┣ [index.html](./../index.html)  
┣ [news.html](./../news.html)  
┣ [players.html](./../players.html)  
┣ [registered_user_page.php](./../registered_user_page.php)  
┗ [tournaments.html](./../tournaments.html)  

#

## javascript section

**_main.js_** this is the main javascript file where we can found all those functions that will be used in every HTML files. In particular:

**function** -> to drop down menu in mobile version

```js
//toggle - dropdown menu

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
  menu.classList.toggle("menu--open");
});
```

**function** -> to hide menu while scrolling down the page

```js
// Hide menu on scroll

let lastScrollTop = 0;
let menuHidden = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    menuHidden.style.top = "-100px";
  } else {
    menuHidden.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
```

**function** -> that add a little arrow when menu is hidden due to scroll

```js
// Show littel arrow when menu is hidden

let arrowDown = document.querySelector(".arrow-down");

window.addEventListener("scroll", function () {
    if (menuHidden.style.top == "-100px") {
        arrowDown.classList.add("visible");

    } else {
        arrowDown.classList.remove("visible");
    }
});
```

**funcion** -> if menu is hidden due to scroll you can click in every part of the page and then the menu will be visible again

```js
// If menu is hidden just click in every part of the page and menu will drop down again

window.addEventListener("click", function () {
  menuHidden.style.top = "0px";
});
```

**_index.js_** this is the javascript file in wich there are functionality useful for index.html file. In particular:

**function** -> will scroll down the page by 600px when big white arrow is clicked

```js
//click arrow to scroll down by 600px

let arrow = document.querySelector(".bottom-arrow");
arrow.addEventListener("click", function () {
  window.scrollTo(0, 600);
});
```

**function** -> will show contents while user is scrolling the page

```js
/**
 * Showing contents while scrolling the page
 * @param {string} querySel
 * @param {number} screenHeight
 */

function onScroll(querySel, screenHeight) {
  let target = document.querySelector(querySel);
  let targetPosition = target.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / screenHeight;

  if (targetPosition < screenPosition) {
    target.classList.add("active");
  } else {
    target.classList.remove("active");
  }
}

window.addEventListener("scroll", function () {
  onScroll(".intro-title", 1.2);
  onScroll(".content-teaser-img", 1.3);
  onScroll(".artOne", 0.95);
});
```

**_players.js_** this is the javascript file that holds the necessary functions for players.html to generate the players on the page and manage any scroll animations and pop-up sections:

**function** -> to generate the single players within the page

```js
/**
 * Function that generates the necessary HTML elements
 * for each player in each team
 * @param {*} playerInfo the player object from the jsonblob
 * @param {*} container the container to append the elements to
 */
function generatePlayer(playerInfo, container) {
  let playerLi = document.createElement("li");
  playerLi.className = "player-list-item";
  container.appendChild(playerLi);

  let playerImage = document.createElement("img");
  playerImage.setAttribute("src", playerInfo.profilePicURL);
  playerImage.setAttribute("alt", playerInfo.gamerTag + " Profile Picture");
  playerLi.appendChild(playerImage);

  let nameDiv = document.createElement("div");
  nameDiv.className = "player-name-heading";
  playerLi.appendChild(nameDiv);

  let playerTag = document.createElement("p");
  playerTag.className = "gamerTag";
  playerTag.innerText = playerInfo.gamerTag;
  nameDiv.appendChild(playerTag);

  let playerName = document.createElement("p");
  playerName.className = "player-name hidden";
  playerName.style.opacity = 0;
  playerName.innerText = playerInfo.name;
  nameDiv.appendChild(playerName);
}
```

**function** -> to generate the teams within the page

```js
/**
 * Function that generates the HTML elements
 * necessary for the team
 * @param {*} teamInfo the team object taken from the jsonblob
 * @param {*} container the container element to
 * append the team elements to
 */
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
```

**function** -> to generate the teams in the right sections

```js
/**
 * function to choose the right team section and
 * create the HTML elements required for the page
 * @param {*} json the json file from which to take the
 * information for teams and players
 */
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
```

**function** -> to convert a jsonblob into an object

```js
/**
 * function to convert a jsonblob into an object
 * @param {*} file the jsonblob url
 * @param {*} callback the function to execute at
 *  the end of loading
 */
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
```

**function** -> to generate the information in the dedicated section for the selected player

```js
/**
 * Function to generate the selected players
 * information in the neeed pages' section
 * @param {*} jsonObj the object obtained from the jsonblob
 * @param {*} playerName the name of the player selected
 */
function generatePlayerInfo(jsonObj, playerName) {
  for (const teams of jsonObj) {
    for (const player of teams.players) {
      if (player.name === playerName.innerText) {
        document
          .getElementById("player-info-pfp")
          .setAttribute("src", player.profilePicURL);
        document.getElementById("player-info-name").innerText = player.name;
        document.getElementById("player-info-code").innerText = player.gamerTag;
        document.getElementById("player-info-bio").innerText = player.bio;
        document.getElementById("player-info-age").innerText = player.age;
        document.getElementById("player-info-experience").innerText =
          player.yearsOfXP;
        document
          .getElementById("player-info-nationality")
          .setAttribute("src", player.nationalityURL);
        tournaments = document.getElementsByClassName("player-info-tournament");
        for (let i = 0; i < tournaments.length; i++) {
          if (i < Object.keys(player.tournaments).length) {
            tournaments[i].innerText = Object.keys(player.tournaments)[i];
            tournaments[i].setAttribute(
              "href",
              player.tournaments[Object.keys(player.tournaments)[i]]
            );
          } else {
            tournaments[i].innerText = "";
          }
        }
      }
    }
  }
}
```

**function** -> called on loading of the jsonblob to convert and excecute the necessary page start functions

```js
function (text) {
    let jsonData = JSON.parse(text);
    printTeams(jsonData);
    document
      .getElementsByClassName("close-profile")[0]
      .addEventListener("click", function () {
        document.getElementById("selected-player-container")
        .className =
          "player-inactive";
        document.body.style.overflow = "visible";
      });

    document.getElementById("empty-div").addEventListener("click", function () {
      document.getElementById("selected-player-container")
      .className =
        "player-inactive";
      document.body.style.overflow = "visible";
    });
    let playerNames = document.getElementsByClassName("player-name");
    const players = document.getElementsByClassName("player-list-item");
    for (let i = 0; i < players.length; i++) {
      players[i].addEventListener("click", function () {
        generatePlayerInfo(jsonData, playerNames[i]);
        document.getElementById("selected-player-container")
        .className =
          "player-active";
        document.body.style.overflow = "hidden";
      });
      window.addEventListener("scroll", function () {
        let playerName = playerNames[i];
        playerName.style.removeProperty("opacity");
        let targetPosition = playerName.getBoundingClientRect().top;
        let screenPosition;

        screenPosition = window.innerHeight / 1.1;
        if (targetPosition < screenPosition) {
          playerName.className = "player-name";
        } else {
          playerName.className = "player-name hidden";
        }
      }
```

#

## style section

**_style.css_** In this file we used some transition animations. For example:

```css
.menu {
  transition: all 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.hero__content .intro-text,
#esport {
  transition: all 0.9s ease-in;
}
```

**_news.css_** In this file we used some **@keyframes** to have some advanced animations. For example, going into the news page you can see how contents come from left and the header from top of the page.

```css
@keyframes navSlideInFromTop {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}

.header {
  animation: 0.7s ease-in-out 0s 1 navSlideInFromTop;
}
```

The site was designed using the "content first" and "mobile first" approach.
We used media queries to gradually upscale contents size in all versions, from mobile, landscape mobile, to desktop. We setted variuos brackpoints, most used are:

```css
@media screen and (min-width: 800px) {
}

@media screen and (min-width: 1024px) {
}

@media screen and (max-width: 900px) and (max-height: 700px) and (orientation: landscape) {
}
```

**_gallery.css_** In this file we display in columns photos about valorant tournaments

```css
.gallery {
  columns: 2;
  column-gap: 0;
  padding: 5px;
}
```

Using the "mobile first" approach we start with 2 columns  
Then we increase the number of columns with the increasing of the screen width using media queries

```css
@media screen and (min-width: 450px) {
}

@media screen and (min-width: 680px) {
}

@media screen and (min-width: 800px) {
}

@media screen and (min-width: 1100px) {
}
```

We use animations to increase the scale when the mouse pass over the images

```css
img:hover {
  transform: scale(1.03);
  transition: all 0.25s;
}
```

**_players.css_** Style sheet used for the player page. It was styled to respect the project's requirement of showing the players in a list format in the mobile vesion, and cards in the desktop version. Both use a section to display a selected players' information when clicked on, a section that is, otherwise, hidden. We used some animations, between which, as an example, the animations to show and hide the players names on scroll depending on the window's position

```css
@keyframes growDown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}

@keyframes shrink {
  0% {
    transform: scaleY(1);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(0);
    opacity: 0;
  }
}
```

****

## Join Us Page

The Join Us page [form.html](./../form.html) has been projected following the site standars.
Navigation bar and footer are "inherited" from the homepage, following the rules like all other pages.
Also colors are the same of the whole site, this helps the user to recognize that he still is in the same site, even if he change page.

#### Structure 

There' s a short introduction to guide the user in the registration.
Every input in the page is client/side validated.
To accomplish this result we served of the HTML attributes

```HTML
 patten=""
 required=""
```
If inputs don' t match patterns will pop up a message that will help the user to modify, in a correct way, its inputs. 
The required attribute don't allows user to leave empty fields.

This page has been projected **mobile first**.
There' s just one media query for the main section (the form) to fit contents in desktop version.
The content size respect portrait and landscape orientation.

#### Interaction/Animation

The interaction in this page is limited.

Input fields have a focus "animation", clicking on the intestation and when selected.
Only buttons have CSS animation to attract the attention of the user and help it to press the right button.

#### Navigation

User can reach the page from the main navigation on the top of every page, and also from the bottom, in the footer.

Inside form there are two external links:
- Redirect users to our tournaments page
- Rediret users to RIOT page, to check other games

Both links open in a new tab:

``` html
 target="_blank" 
 ```


this allow user to navigate and pick desidered information out of form page
without loosing inserted datas or exit the site. 

#### Functionality (...and why)

**PHP**
 
```HTML
   <form method="post" action="./form.php" class="form-container" id="form" name="form">
```
In this project, we used the method post attribute to send data. The post method appends data inside the body of the HTTP request instead of showing in URL, and that for us is obviously the best method beacuse we store people sensitive data. This allow us to protect our users.
The action attribute is set to the [./form.php](../form.php) page. 
In this page we execute the connection to the web server and the database. 

``` PHP
    $servername = "localhost"; // address
    $username = "root";         //user
    $password = "";             //password 
    $dbname = "levelupg_contact_db"; //database name

    if (isset($_POST['fname'])) { 
    echo "ok";


$connection = new mysqli($servername, $username, $password, $dbname);
```

We used isset on fname, this mechanism collaborate with the form client-side validation because user can' t leave the name field empty.
This means that you can t send that if u don't fill the form as required.

To make data readable for the database we used 
``` PHP
    real_escape_string()
```
This function escapes special characters in a string for use in an SQL statement, taking into account the current charset of the connection.

Here' s the query we used to fill the database fields

``` PHP
    $query = "INSERT INTO  players
 (firstName, middleName, surname,
 battleTag, teamName,  mail,
 phone, city, userAddress, country, age, gender,
 hair, eyes, tournament, otherGames, bio )
        VALUES('$fName', '$mName', '$lName', '$battleTag', 
        '$teamName', '$email', '$telephone', '$city', '$userAddress', 
        '$country', '$age', '$gender', '$hair', '$eye', '$tournaments','$otherGames', '$bio')";
    if($connection->query($query) === true ) {
        header("Location: ./form.html");
    } else {
        echo "no";
    }
}
```


**MYSQL**

We created a symple database with just one table "players".
Every column except the Id match a form input field.
The Id is setted as PRIMARY KEY, and it autoincrements.


**To the database... and back**

After we created the database we wanted to test a "callback" from the db to an HTML to help page owners to manage users information.
The result is in [registered_user_page.php](./../registered_user_page.php).
The page is softly styled with some CSS.  
All datas will fill a table.
**This is just a test!**
**The page is not secure!!!**

#### NOTES

- In this project we didn' t create a login area.
- Database is located on localhost 
- Some areas as already underlined could not be secure and data could be not safe


****

## Players Page

The players page [players.html](./../players.html) has been projected following the website standards.
Navigation bar and footer are "inherited" from the homepage, following the rules like all other pages.
Also colors are the same of the whole site, this helps the user to recognize that he still is in the same site, even if he changed page.
The players are automatically generated using javascript, getting the information from json files, in this case a jsonblob. This makes the page modifyable through any change to the json file.
The json file follows a format for the teams:

```json
{
  "team": /* string representing the teams name */,
  "active": /* boolean value */,
  "wins": /* number of wins */,
  "players": [
    {
      /*
        object with player information
      */
    }
    //...
  ]
}
```

And a format for the players:

```json
{
  "profilePicURL": /*string value representing the URL for the players profile picture*/,
  "gamerTag": /*string value representing the players BattleTag*/,
  "name": /*string value representing the players name*/,
  "bio": /*string value representing the players bio / description */,
  "age": /*numeric value representing the player's age*/,
  "yearsOfXP": /*numeric value representing the player's years of experience*/,
  "nationalityURL": /*string value representing the URL for the players nationality flag*/,
  "tournaments": {
    /*
        an object containing 0 to 5 of the most recent tournaments (the name being the key) and their URL link (it being the value)
    */
    }
}
```

#

## References

- [W3Schools](www.w3schools.com)
- [MDN](developer.mozilla.org)
- [stackoverflow](https://stackoverflow.com/)

#

## Browser compatibility

- Google Chrome v. 99.0.4844.84
- Apple Safari v. 15.4
- Opera GX v. 84.0
- Mozilla Firefox v. 98.0.2
- Microsoft Edge v. 100.0.1185.29

#

## Authors

**Davide Murroni** - davide.murroni@edu.itspiemonte.it

**Eloise Bryony Giorda** - eloise.giorda@edu.itspiemonte.it

**Francesco Abrate** - francesco.abrate@edu.itspiemonte.it

**Giampietro Piras** - giampietro.piras@edu.itspiemonte.it

**Federico Luciano Stroppiana** - federico.stroppiana@edu.itspiemonte.it

#

**_ITS ICT Piemonte - Web Developer_**

#
