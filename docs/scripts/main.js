"use strict";function init(){Tabletop.init({key:public_spreadsheet_url,callback:getInfo,simpleSheet:!0})}function getInfo(e,o){function t(){var o=n[0].quote,t=encodeURI(o),i="http://api.giphy.com/v1/gifs/search?q="+t+"&api_key=dc6zaTOxFJmzC";$(".quote-text").html(o),$(".quote-author").html("- "+n[0].author),$.getJSON(i,function(e){var o=e.data[Math.floor(Math.random()*e.data.length)].id;console.log(e.data),console.log(o),$("#videoSrc").prop("src","//giphy.com/embed/"+o),console.log("link: //giphy.com/embed/"+o)}),n.splice(n[0],1),0===n.length&&(n=e.slice(0),Shuffle(n))}var n=e.slice(0);console.log(n),Shuffle(n),t(),$("#new").mousedown(function(){$(this).addClass("spinning"),setTimeout(function(){$("#new").removeClass("spinning")},1e3),t()})}function Shuffle(e){for(var o,t,n=e.length;n;o=parseInt(Math.random()*n),t=e[--n],e[n]=e[o],e[o]=t);return e}window.onload=function(){init()};var public_spreadsheet_url="https://docs.google.com/spreadsheets/d/10eQQGsVwyAlKSk_Ios-6z-t-eTym_g7v8iowmokSwAI/pubhtml",quoteItem=[];