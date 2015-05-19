/**
 * 
 * @authors Minminma (minminma@tencent.com)
 * @date    2014-12-16 17:34:17
 * @version $Id$
 */

// 初始化页面fontsieze START
!function() {
   var count = 0;
   /*
      # 按照比例设定html字体
      # 说明：
         - 请使用css适配主流屏幕宽度
         - setTimeout是为了准确获取屏幕实际渲染宽度，会造成闪动（本例中是先将body隐藏，字体计算好了之后再显示）
         - 精确到小数点后三位
         - baseWidth是设计稿宽度，baseFontSize是baseWidth下计算时所使用的rem对应的px值，比如本例中640下1rem=20px
   */
   function setHtmlFontSize(callback) {
      var baseWidth = 640, baseHeight = 1008, baseFontSize = 20, newSize = 0, iPhone5Ritio=320/462, winWidth, winHeight, winRitio, zoomRitio = 1;
      baseRitio = baseWidth/baseHeight;
      winWidth = window.innerWidth;
      winHeight = window.innerHeight;
      winRitio = winWidth/winHeight;
      WidthRitio = winWidth/baseWidth;
      HeightRitio = winHeight/baseHeight;
      zoomRitio = Math.min(WidthRitio,HeightRitio);
        newSize = parseInt( zoomRitio * 10000 * baseFontSize ) / 10000;
      
       //如果此时屏幕宽度不准确，就尝试再次获取分辨率，只尝试10次，否则使用innerWidth计算
      if(document.body.clientWidth !== window.innerWidth && count < 10) {
         document.body.style.display = "none";
         window.setTimeout(setHtmlFontSize, 0);
         count++;
      } else {
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
   setHtmlFontSize();

   // 初始化$() START
      var $ = function (id) {
      var o = document.getElementById(id);
      if (!o) {
        return null;
      }
      o.addClass = function (cls) {
        if (!this.className) {
          this.className = o.className;
        }
        var splitor = " ";
        if (!this.classArray) {
          if (this.className) {
            this.classArray = this.className.split(splitor);
          } else {
            this.classArray = [];
          }
        }
        var found = 0;
        for (var i = 0, l = this.classArray.length; i < l; i++) {
          if (this.classArray[i] == cls){
            found = 1;
            break;
          }
        }
        if (!found) {
          this.className += splitor + cls;
          this.classArray.push(cls);
        }
        o.className = this.className;
        return o;
      },
      o.removeClass = function (cls) {
        if (!this.className) {
          this.className = o.className;
        }
        var splitor = " ";
        if (!this.classArray) {
          if (this.className) {
            this.classArray = this.className.split(splitor);
          } else {
            this.classArray = [];
          }
        }
        for (var i = 0, l = this.classArray.length; i < l; i++) {
          if (this.classArray[i] == cls){
            this.classArray.splice(i);
            this.className = this.classArray.join(splitor);
            o.className = this.className;
            break;
          }
        }
      }
      return o;
    } 
// 初始化$() END
}();
// 初始化页面fontsieze END