// ==UserScript==
// @name         Steam Auto Queue
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  This script will automatically click next on all the games in your queue so you can clear it out and get your card.
// @author       Five Element Ninja (Twitter: @FivElementNinja)
// @match        *://store.steampowered.com/app/*
// @updateURL    https://github.com/FiveElementNinja/steam-auto-queue/steam-auto-queue.js
// @downloadURL  https://github.com/FiveElementNinja/steam-auto-queue/steam-auto-queue.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

console.log('Steam Auto Queue Loaded - Will try to click Next automatically...');
try {
	$J('#next_in_queue_form').submit();
}
catch(err) {
	console.log('Error clicking next.');
}