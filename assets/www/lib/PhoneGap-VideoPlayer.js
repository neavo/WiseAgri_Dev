cordova.define("cordova/plugin/videoplayer",function(c,b,d){var a=c("cordova/exec");var f=function(){};f.prototype.play=function(g){a(null,null,"VideoPlayer","playVideo",[g]);
};var e=new f();d.exports=e;});if(!window.plugins){window.plugins={};}if(!window.plugins.videoPlayer){window.plugins.videoPlayer=cordova.require("cordova/plugin/videoplayer");
}