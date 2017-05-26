// ==UserScript==
// @name         DickPunch
// @namespace    http://meharryp.xyz
// @version      1.0
// @description  A literal dick waving contest
// @author       You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @match        *://facepunch.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function(){
        $("div[id=\"userstats\"]").each(function(i){
            let text = $(this).html();
            let match1 = text.match("([0-9,]+.\\w)\\s.");
            let match2 = text.match("([a-zA-Z].+\\w[0-9])");

            console.log(match1);
            console.log(match2);
            if (match1 && match2){
                console.log("match");
                let postCount = match1[1].replace(",", "");
                console.log(postCount);

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
