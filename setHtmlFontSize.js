"use strict";
function setHtmlFontSize(baseWidth, baseHeiht, baseFontSize, callback) {
  var newSize = 0,
  sacle = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeiht),
  newSize = parseInt( sacle * 10000 * baseFontSize ) / 10000;
   //如果css已经兼容当前分辨率就不管了
   if(newSize + 'px' === getComputedStyle(document.documentElement)['font-size'] 
      || Math.floor(newSize) + 'px' === getComputedStyle(document.documentElement)['font-size']
      || Math.ceil(newSize) + 'px' === getComputedStyle(document.documentElement)['font-size'] ) {
     return false;
   }
   //如果此时屏幕宽度不准确，就尝试再次获取分辨率，只尝试10次，否则使用innerWidth计算
  if(document.body.clientWidth !== window.innerWidth && count < 10) {
     document.body.style.display = "none";
     window.setTimeout(setHtmlFontSize, 0);
     count++;
  } else {
      var sacle = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeiht),
      newSize = parseInt( sacle * 10000 * baseFontSize ) / 10000;
      document.body.style.display = "none";
      setTimeout(function() {
        document.body.style.display = "";
        if(callback) {
          callback();
        }
        document.documentElement.style.fontSize = newSize + "px";
     }, 0);
  }
}