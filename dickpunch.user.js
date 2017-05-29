// ==UserScript==
// @name         DickPunch
// @namespace    http://meharryp.xyz
// @version      1.0.1.3
// @description  A literal dick waving contest
// @author       You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js
// @match        *://facepunch.com/showthread.php?t=*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/meharryp/dickpunch/master/dickpunch.user.js
// ==/UserScript==

function Square(SqX, SqY, SqW, SqH, SqCol, SqPos) {
    return "<rect style=\"fill:"+SqCol+";\"x=\""+SqX+"\" y=\""+SqY+"\" width=\""+SqW+"\" height=\""+SqH+"\"><title>"+SqPos+" Posts</title></rect>";
}

(function() {
    'use strict';

    $(document).ready(function(){
        $("div[id=\"userstats\"]").each(function(i){
            let Text = $(this).html();
            let PostCount = Text.match("([0-9,]+.\\w|[0-9]+)\\s.")[1].replace(",", "");
            let JoinDate = Text.match("([a-zA-Z].+\\w[0-9])")[0];
            let ColourCock = "#fedecf";
            let DickSize = Math.floor(PostCount / 500);
            let CockHTML = `${JoinDate}<br><svg height="16" width="${24+DickSize}">${Square(0,3,12+DickSize,7.5,ColourCock,PostCount)+Square(1,10,8,4.5,ColourCock,PostCount)+Square(11+DickSize,1.5,6,7,ColourCock,PostCount)+Square(15+DickSize,1.5,4,5,ColourCock,PostCount)}<path stroke="black" d="M0 3h${11+DickSize} M${11+DickSize} 2h4 M${15+DickSize} 1h2 M${17+DickSize} 2h2 M${19.5+DickSize} 2.5v3 M${18+DickSize} 6h1 M${17+DickSize} 7h1 M${15+DickSize} 8h2 M${12+DickSize} 9h3 M8 10h${4+DickSize} M9.5 10v3.5 M8 14h1 M2 15h6 M1 14h1 M0.5 9.5v4" style="stroke:black;stroke-width:1;stroke-linejoin:miter;" shape-rendering="crispEdges">Sorry, your browser does not support inline SVG.</svg>`;
            $(this).html(CockHTML);
        });
    });
})();
