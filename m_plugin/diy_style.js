// ==UserScript==
// @author         sodas5
// @name           IITC plugin: DIY style
// @category       Controls
// @version        1.0.0.20240629
// @description    user diy style
// @id             diy style
// @updateURL      https://github.com/xifanu/iitc_plugin/raw/main/m_plugin/diy_style.js
// @downloadURL    https://github.com/xifanu/iitc_plugin/raw/main/m_plugin/diy_style.js
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