// ==UserScript==
// @name         OGame Planet Visitor
// @namespace    https://github.com/MrBurrBurr
// @version      0.1
// @description  see you in space, cowboys!
// @author       FREDERICK
// @match        https://*.ogame.gameforge.com/*
// @icon         https://www.google.com/s2/favicons?domain=lobby.ogame.gameforge.com
// @grant        none
// @downloadURL  https://github.com/MrBurrBurr/OGame-Planet-Visitor/raw/main/code.user.js
// @updateURL    https://github.com/MrBurrBurr/OGame-Planet-Visitor/raw/main/code.user.js
// ==/UserScript==

(function() {
    'use strict';

    const planets = document.querySelectorAll('[id^="planet-"]');
    const randomPlanet = planets[planets.length * Math.random() | 0];
    const rndInt = randomIntFromInterval(20000, 45000);
    const planetName = randomPlanet.firstElementChild.children[1].innerText;
    console.log(`Visiting ${planetName} in ${Math.floor(rndInt / 1000)} seconds...`);
    setTimeout(() => {
        randomPlanet.firstElementChild.click();
        //if nothing happens after 5 sec, we want to reload the page
        setTimeout(() => {
            location.reload();
        }, 5000);
    }, rndInt);

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
})();
