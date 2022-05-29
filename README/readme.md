# Esports-01 

## Final target
Create an website with various areas that display information about an Esports league,
its tournaments, teams and players

#
## Requirements
***Structure and behavior***

Create a website about an Esports league

The website should have at least the following areas:

    ● homepage
    ● news page
    ● tournaments
    ● players
    ● join us (player application page)
    ● gallery
    ● about (about the league)

 ***General***

 All pages should include:

    ● the league's name and logo
    ● main navigation (switching between different pages/areas)
    ● secondary navigation (jumping to different sections in the same page
#

## Approach to solution

We started thinking about how to divide pages and work.... Eloise pensaci tu
#

## File
- [README](./readme.md)
- [index.html](./../index.html)
- [form.html](./../form.html)
- [gallery.html](./../gallery.html)
- [news.html](./../news.html)
- [players.html](./../players.html)
- [tournaments.html](./../tournaments.html)

- [main.js](scripts/main.js)
- [index.js](./../scripts/index.js)
- [players.js](./../scripts/players.js)
  
- [style.css](./../Style/style.css)
- [tournaments.css](./../Style/tournaments.css)
- [news.css](./../Style/news.css)
- [form.css](./../Style/form.css)
- [players.css](./../Style/players.css)
- [gallery.css](./../Style/gallery.css)

- [form.php](./../form.php)
- [registered_user_page.php](./../registered_user_page.php)

- [json](./../Contents/json/players.json)

#

## javascript section

***main.js*** this is the main javascript file where we can found all those functions that will be used in every HTML files. In particular:


**function** -> to drop down menu in mobile version
``` js
//toggle - dropdown menu

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
    menu.classList.toggle("menu--open");
});
```

**function** -> to hide menu while scrolling down the page
``` js
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
});
```
**function** -> that add a little arrow when menu is hidden due to scroll
``` js
// Show littel arrow when menu is hidden

window.addEventListener("scroll", function () {
    if (menuHidden.style.top == "-100px") {
        arrowDown.classList.add("visible");
    } else {
        arrowDown.classList.remove("visible");
    }
});
```


**funcion** ->  if menu is hidden due to scroll you can click in every part of the page and then the menu will be visible again
```js
// If menu is hidden just click in every part of the page and menu will drop down again

window.addEventListener("click", function () {
    menuHidden.style.top = "0px";
});
```


***index.js*** this is the javascript file in wich there are functionality useful for index.html file. In particular:

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
    onScroll(".artOne", .95);
});
```

#

## style section

***style.css*** In this file we used some transition animations. For example:

``` css
 .menu {
    transition: all 0.7s cubic-bezier(.215, .61, .355, 1);
}

 .hero__content .intro-text,
#esport {
    transition: all 0.9s ease-in;
}
```


***news.css*** In this file we used some **@keyframes** to have some advanced animations. For example, going into the news page you can see how contents come from left and the header from top of the page.

``` css
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
@media screen and (min-width: 800px){}

@media screen and (min-width: 1024px){}

@media screen and (max-width: 900px) and (max-height: 700px) and (orientation: landscape){}
```

#

## Form 



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

**Eloise Bryony Giorda**  - eloise.giorda@edu.itspiemonte.it

**Francesco Abrate** - francesco.abrate@edu.itspiemonte.it

**Giampietro Piras**  - giampietro.piras@edu.itspiemonte.it

**Federico Luciano Stroppiana**  - federico.stroppiana@edu.itspiemonte.it

#

***ITS ICT Piemonte - Web Developer***
#





