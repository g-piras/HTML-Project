# ESPORTS - `Group-01`


## PROJECT INTRODUCTION AND DESCRIPTION    
Create an website with various areas that display information about an Esports league, its tournaments, teams and players.

#
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
    ● secondary navigation (jumping to different sections in the same page)

#

## USAGE   

The website can be visited by starting up any of the HTML files, all having navigation leading to each other. A web server (XAMPP - downloadable at https://www.apachefriends.org/it/index.html - activating `Apache` and `MySQL`) must be used alongside the added database
in the /**database** folder (must be added to phpMyAdmin - accesible at http://localhost/dashboard/ - - - -> phpMyAdmin(top right - last item in navbar) - or at http://localhost/phpmyadmin/) to utilize the back end of the form in the join us page as asked by **bonus 2**.


**How to upload the database**
- Go to http://localhost/phpmyadmin/
- Create a new database by clicking on new (first element in the left navigation bar)
- Use this name: "levelupg_contact_db"
- Click on this database
- Go to import and click on "Choose file" from "Files to import" (first section of the import page)
- Select the file "levelupg_contact_db.sql" from the **/database** folder
- Confirm to upload the database


#

## CONFIGURATION AND TECHNICAL CHARACTERISTICS   

In the main folder there are six HTML files:
- **index.html**, containing the elements seen within the home page.
- **tournaments.html**, containing the elements seen in the tournaments page.
- **players.html**, containing the elements seen in the teams and players page.
- **news.html**, containing the elements seen within the news page.
- **gallery.html**, containing the elements seen within the gallery page.
- **form.html**, containing the elemnts seen in the join us page.

There are also two PHP files:
- **form.php**, managing the backend for the join us page
- **registered_user_page.php**, managing the registered user for the join us page.

#

In the folder /**Style** there are six CSS files:
- **style.css**, containing the style rulesets needed for the home page.
- **tournaments.css**, containing the style rulesets needed for the tournaments page.
- **players.css**, containing the style rulesets needed for the teams and players page.
- **news.css**, containing the style rulesets needed for the news page.
- **gallery.css**, containing the style rulesets needed for the gallery page.
- **form.css**, containing the style rulesets needed for the join us page.

#

In the folder /**scripts** there are four javascript files:
- **index.js**, containing the functions needed for the home page.
- **main.js**, cointaning the functions used for the header and navigation, used in all pages
- **players.js**, containing the functions used in the teams and players page
- **tournaments.js**, containing the functions used in the tournaments page

#

## FILES AND PROJECT STRUCTURE     

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
┃ ┗ video/  
┃   ┗ intro-video_Trim.mp4  
┣ database/  
┃ ┣ 
┃ ┣ 
┃ ┗  
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


Every js file has header documentation following the JSDoc comment format that explain its aim. The folder **/JSDoc**  cointains a JSDoc documentation, which was not personalized, of the entire project. The folder **/Contents** contains the **/img** folder containg all images, the **/json** folder containg a copy of the json file used for the jsonblob, and the **/video** folder containg the intro video

---

## FEATURES AND BONUSES DELIVERED

The project was executed by dividing the pages and relative files between the developers:

## FEATURE 1 - Home Page - Giampietro Piras

The home page [index.html](./../index.html) has been projected creating the website standards, this means:
- a small introduction to the website.
- content area for most recent news posts (at least 3).
- some information from other areas and their respective CTAs.
It includes a breif About section regarding the league. `(Feature 7 - About)`
It also creates the navigation bar and the footer that are used in all pages
It holds secondary navigation to all other pages alongside some snippets from various sections and some descriptions to the esports league.

## FEATURE 2 - Tournaments Page - Francesco Abrate

The tournaments page [tournament.html](./../tournaments.html) has been projected following the website standards, meaning:
- grouping of tournaments in their respective sections.
- each tournament holds:
  - a name.
  - a code.
  - a location.
  - an image.
  - a date.
  - a list of teams partecipating.
- the page is responsive, listing the torunaments in mobile view, and using a card format on larger viewports.
Navigation bar and footer are "inherited" from the homepage, following the rules like all other pages.
Also colors are the same of the whole site, this helps the user to recognize that he still is in the same site, even if he changed page.
The modal parts of the page are managed through the javascript file tournament.js

## FEATURE 3 - Players Page - Eloise Bryony Giorda

The players page [players.html](./../players.html) has been projected following the website standards, which are:
- the site must hold a list of teams, each holding a list of players.
- the teams must be grouped in 'active' and 'retired.
- there must be at least 8 teams with 5 players each.
- all players sould include at least a name, code, bio, photo, age, nationality,
years of experience and links to tournaments in which the player has participated.
- the page is responsive, listing the torunaments in mobile view, and using a card format on larger viewports.
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

## FEATURE 4 - Gallery Page - Federico Luciano Stroppiana

The Gallery page [gallery.html](./../gallery.html) has been projected following the site standars, these being:
- the gallery ough to hold images relating to the tournaments and league.
Navigation bar and footer are "inherited" from the homepage, following the rules like all other pages.
Also colors are the same of the whole site, this helps the user to recognize that he still is in the same site, even if he changed page.

## FEATURE 5 - News Page - Giampetro Piras `(No requirements were asked)`

The News page [news.html](./../news.html) has been projected following the site standars.
Navigation bar and footer are "inherited" from the homepage, following the rules like all other pages.
Also colors are the same of the whole site, this helps the user to recognize that he still is in the same site, even if he changed page.
It holds all the articles relative to the events.

## FEATURE 6 - Join Us Page

The Join Us page [form.html](./../form.html) has been projected following the site standars:
- the form should have input fields for:
  - first, middle (optional) and last names.
  - desired torunaments.
  - age, gender, hair and eye color.
  - contact information: email, phone numbers, address, etc...
  - games (one or more games that the player us specialized in).
  - a short biography.
- be client-side validated.
Navigation bar and footer are "inherited" from the homepage, following the rules like all other pages.
Also colors are the same of the whole site, this helps the user to recognize that he still is in the same site, even if he change page.

#### Structure 

There's a short introduction to guide the user in the registration.
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

### BONUS 2 - Functionality (...and why)

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
- Some areas, as already underlined, could not be secure and data could not be safe

#

### BONUS 1 - Animations
All pages feature animations throught. The animations can be on hover, scroll or activation.
Some examples are:
- sliding navbar when called in mobile view.
- appearing text on scroll.
- highlighting of clickable content.

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

**_news.css_** In this file we used some **@keyframes** to have some advanced animations. For example, going into the news page you can see how contents come from the left and the header from the top of the page.

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
We used media queries to gradually upscale content size in all versions, from mobile, landscape mobile, to desktop. We setted variuos brackpoints, the most used being:

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

**_form.css_** Style sheet used for the join us page. It was styled to respect the websites style template and make the form's input spaces fit within the site.

**_tournaments.css_** Style sheet used for the tournaments page. It was styled to respect the project's requirement of showing the torunaments in a list format in the mobile vesion, and cards in the desktop version. Both use a section to display more information when clicked on, a section that is, otherwise, hidden. We used some animations, between which, as an example, the animations to highlight hovered tournaments to invite the user to click on them.

#

## javascript section

**_main.js_** this is the main javascript file where we can find all the functions that will be used in every HTML file. In particular it holds:

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

**_index.js_** this is the javascript file in wich there are functionality useful for all the html files. In particular it holds:

**function** -> will scroll down the page by 600px when big white arrow is clicked

```js
//click arrow to scroll down by 600px

let arrow = document.querySelector(".bottom-arrow");
arrow.addEventListener("click", function () {
  window.scrollTo(0, 600);
});
```

**function** -> will show contents when the user is scrolling the page

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

**function** -> called on loading of the jsonblob to convert and excecute the necessary page on start functions

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


**tournaments.js_** this is the javascript file that holds the necessary functions for tournaments.html to manage the modal sections:

**Code** When the user clicks on `<span>` (x) to close the modal

```js
for(let i = 0; i < span.length; i++){
    span[i].onclick = function() {
    modal[i].style.display = "none";
    document.body.style.overflow = "visible"
}
}
```
**function** -> When the user clicks anywhere outside of the modal, to close it

```js
window.onclick = function(event) {
    for(let i = 0; i < modal.length; i++){
       if (event.target == modal[i]) {
        modal[i].style.display = "none";
        document.body.style.overflow = "visible"
        } 
    }   
}
```
**function** -> When the user clicks the button to open the modal 
```js
for (let i = 0; i < btn.length; i++){
    btn[i].onclick = function() {
        modal[i].style.display = "block";
        document.body.style.overflow = "hidden";
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

## EXTERNAL RESOURCES      

- [JsonBlob](https://jsonblob.com/)
- [XAMPP](https://www.apachefriends.org/it/index.html)
- [phpMyAdmin](http://localhost/phpmyadmin/)

#

## LICENSE AND CONTACT INFORMATION    

MIT License

Copyright (c) [2022] [Francesco Abrate, Eloise Bryony Giorda, Davide Murroni, Giampietro Piras, Federico Luciano Stroppiana]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

The software is provided "as is", without warranty of any kind, express or 
implied, including but not limited to the warranties of merchantability,
fitness for a particular purpose and noninfringement. In no event shall the
authors or copyright holders be liable for any claim, damages or other liability,
whether in an action of contract, tort or otherwise, arising from, out of 
or in connection with the software or the use or other dealings in the software. 

Contact information:
- davide.murroni@edu.itspiemonte.it
- francesco.abrate@edu.itspiemonte.it
- eloise.giorda@edu.itspiemonte.it
- giampietro.piras@edu.itspiemonte.it
- federico.stroppiana@edu.itspiemonte.it

---

## COPYRIGHT

Some copyrighted material has been used. All credit goes to the original owner of said material.

## AUTHORS     



**Davide Murroni** - developer

**Eloise Bryony Giorda** - developer

**Francesco Abrate** - developer

**Giampietro Piras** - developer

**Federico Luciano Stroppiana** - developer

#

**_ITS ICT Piemonte - Web Developer_**

#

## CHANGELOG AND VERSION HISTORY     

We have used the Git on Visual Code to work on the flow of the project. The changelog and history of the project can be resumed from the commits that we have made on: https://github.com/KelosDev/HTML-Project

--- 

