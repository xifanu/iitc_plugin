// ==UserScript==
// @author         sodas5
// @name           IITC plugin: DIY style
// @category       Addon
// @version        1.0.0.20240628
// @description    diy style
// @id             diy style
// @namespace      none
// @match          https://intel.ingress.com/*
// @grant          none
// ==/UserScript==

(function() {
    'use strict';

    var element = document.getElementById('updatestatus');
    if (element) {
        element.style.border = '20px';
        element.style.padding = '20px';
    }
})();