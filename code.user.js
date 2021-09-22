// ==UserScript==
// @name         OGame Planet Visitor
// @namespace    https://github.com/MrBurrBurr
// @version      0.2
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

  const planetAndMoons = document.querySelectorAll('a.planetlink, a.moonlink');
  const randomPlanetOrMoon = planetAndMoons[planetAndMoons.length * Math.random() | 0];
  const rndInt = randomIntFromInterval(20000, 45000);
  
  setTimeout(() => {
    randomPlanetOrMoon.click();
    // if nothing happens after 5 sec, we want to reload the page
    setTimeout(() => {
      location.reload();
    }, 5000);
  }, rndInt);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
})();
