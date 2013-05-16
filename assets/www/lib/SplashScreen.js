var SplashScreenImageSrc = [
	"data/SplashScreen/SplashScreen_01.jpg",
	"data/SplashScreen/SplashScreen_02.jpg",
	"data/SplashScreen/SplashScreen_03.jpg",
];

function HideSplashScreen() {
	document.getElementById("SplashScreen").style.display = "none";
};

document.write(""
	 + "<div id = 'SplashScreen' onclick = 'HideSplashScreen()' >"
	 + "	<img id = 'SplashScreenImage' src = '" + SplashScreenImageSrc[0] + "' style = 'height : 100%; width : 100%;' />"
	 + "</div>");

var Key = 1;
var IntervalHandle = setInterval(function () {
		var Src = SplashScreenImageSrc[Key];
		if (Src) {
			document.getElementById("SplashScreenImage").src = Src;
			Key = Key + 1;
		} else {
			document.getElementById("SplashScreen").style.display = "none";
			clearInterval(IntervalHandle);
		};
	}, 3000);
