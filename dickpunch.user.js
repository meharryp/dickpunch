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

                let cockHTML = `${joinDate}<br><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA0ElEQVQokVWR0ZHFIAwDV/33FqgAU4l0H4bkXWY8gC3WMiFB/HwJenPJrYl8BziCEAXEP0giUAQRWCLnSgALWSiknmRPp4a9RlJPvJ5kjWQPd0y3sIa9nvR+OmskNXrd015PyGrhoTZ9D6eGU/MNfFu94nlEh1jTXiOkhl3tyXVa1qWei+3xkH4LNXK9X88IfFu7nqbu6eM9kiLJAB9xPfHPpNcKwgg+wh5OPfn2HRJGUrLPQHv2egc8L3BbI/TR3vfr1nBE/YvhJAxcgjvX9T8A1ZHotZ7XQQAAAABJRU5ErkJggg==" border="0" alt="" title="${match1[1]} Posts">`;

                for (var i=0; i < dickSize; i++){
                    cockHTML += `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAPCAYAAAAlH6X5AAAAMklEQVQImTXLsRHAIAwEMHn/3SATAJP4U3A06iRSQBFZ43Fm6zUie7acrxVN3nBvSqgfC1Ue/3J6nsQAAAAASUVORK5CYII=" border="0" alt="" title="${match1[1]} Posts">`;
                }

                cockHTML += `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAPCAYAAAA2yOUNAAAAtElEQVQokXWSy3EAIQxDpf57AyoAKtHLwct+MokuzFiWJQwCrAsg24pkkO66bGMrOuRqsHokpwSSMjvsnqwGe4TZyexkNlgjthBrhDWS2YrYPdVQE21Tk1aDWcWsTgl72D2yo2OTUlLkCLuXlSSxR54MlS2rIV2hTxNn2mxILovaiUEWa0QysvCL1APr+IJ8FgiYb+O/sHi2bp0neBU/uC2Epdvi9/mn8iKPCBnh1438+QHIP2Tq2GHoTHCwAAAAAElFTkSuQmCC" border="0" alt="" title="${match1[1]} Posts">`;

                $(this).html(cockHTML);
            }
        });
    });
})();
