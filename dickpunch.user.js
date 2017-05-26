// ==UserScript==
// @name         DickPunch
// @namespace    http://meharryp.xyz
// @version      1.0.1
// @description  A literal dick waving contest
// @author       You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @match        *://facepunch.com/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/meharryp/dickpunch/master/dickpunch.user.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function(){
        $("div[id=\"userstats\"]").each(function(i){
            let text = $(this).html();
            let match1 = text.match("([0-9,]+.\\w)\\s.");
            let match2 = text.match("([a-zA-Z].+\\w[0-9])");

            if (match1 && match2){
                let postCount = match1[1].replace(",", "");
                let dickSize = Math.floor(postCount / 500);
                let joinDate = match2[0];

                let cockHTML = `${joinDate}<br><img src="https://i.imgur.com/XsgxKHP.gif" border="0" alt="">`;

                for (var i=0; i < dickSize; i++){
                    cockHTML += `<img src="https://i.imgur.com/tRkaOA3.gif" border="0" alt="">`;
                }

                cockHTML += `<img src="https://i.imgur.com/TCpSpgR.gif" border="0" alt="">`;

                $(this).html(cockHTML);
            }
        });
    });
})();
