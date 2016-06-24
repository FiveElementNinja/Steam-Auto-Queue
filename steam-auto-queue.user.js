// ==UserScript==
// @name         Steam Auto Queue
// @namespace    https://github.com/FiveElementNinja/Steam-Auto-Queue/
// @version      1.5
// @description  This script will automatically click through your discovery queue so you can get a sale card.
// @author       Five Element Ninja (Twitter: @FivElementNinja)
// @match        *://store.steampowered.com/app/*
// @match        *://store.steampowered.com/agecheck/*
// @updateURL    https://raw.githubusercontent.com/FiveElementNinja/Steam-Auto-Queue/master/steam-auto-queue.user.js
// @downloadURL  https://raw.githubusercontent.com/FiveElementNinja/Steam-Auto-Queue/master/steam-auto-queue.user.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */

(function() {
    'use strict';
    console.log('Steam Auto Queue Loaded - Will try to click Next automatically...');
	try {
        if (window.location.pathname.indexOf('/agecheck') > -1) {
            var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            $J('#agecheck_form select[name="ageDay"] option[value="'+rand(1,29)+'"]').attr('selected','selected');
            $J('#agecheck_form select[name="ageYear"] option[value="'+rand(1985,1995)+'"]').attr('selected','selected');
            $J('#agecheck_form select[name="ageMonth"] option[value="'+month[rand(0,11)]+'"]').attr('selected','selected');
            $J('#agecheck_form').submit();
        } else {
            $J('#next_in_queue_form').submit();
        }
	}catch(err) {
		console.log('Error clicking next.');
	}
})();

function rand(min, max) {
	return Math.floor(Math.random()*(max-min)+min);
}
