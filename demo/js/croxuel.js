/*! croxuel 2014-09-25 */
var Croxuel=function(){function a(a,b,c){for(var d,e=c.length,f=0;e>f;f++){var g=Math.abs(b-f+e)%e,h=c[g];if(h.className.indexOf(a)>=0){d=h;break}}return d}function b(a,b,c){for(var d,e=c.length,f=0;e>f;f++){var g=(b+f)%e,h=c[g];if(h.className.indexOf(a)>=0){d=h;break}}return d}function c(){if(!h){h=!0;for(var c=document.querySelectorAll("li"),d=document.querySelector("li.active"),e=[],f=0,g=c.length;g>f;f++)e.push(c[f]);var i=e.indexOf(d),j=a("left",i,e),k=b("right",i,e);d.className="leftTransition",j.className="right",k.className="active",setTimeout(function(){var a=document.querySelector("#croxuel li.leftTransition");a.className="left",h=!1},500)}}function d(){if(!h){h=!0;for(var c=document.querySelectorAll("li"),d=document.querySelector("li.active"),e=[],f=0,g=c.length;g>f;f++)e.push(c[f]);var i=e.indexOf(d),j=b("left",i,e),k=a("right",i,e);d.className="rightTransition",j.className="active",k.className="left",setTimeout(function(){var a=document.querySelector("#croxuel li.rightTransition");a.className="right",h=!1},500)}}function e(){null!=document.querySelector("#croxuel[data-arrow_control]")&&f(),null!=document.querySelector("#croxuel[data-button_control]")&&g()}function f(){document.querySelector("body").addEventListener("keydown",function(a){37==a.keyCode?c():39==a.keyCode&&d()})}function g(){document.querySelector("body").addEventListener("click",function(a){var b=a.target;b.hasAttribute("data-croxuel_left_button")?c():b.hasAttribute("data-croxuel_right_button")&&d()})}var h=!1;return{slideLeft:function(){c()},slideRight:function(){d()},init:function(){document.addEventListener("DOMContentLoaded",function(){e()})}}}();Croxuel.init();