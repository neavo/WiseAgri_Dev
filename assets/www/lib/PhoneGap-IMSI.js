// PhoneGap IMSI 插件
// PhoneGap IMSI Plugin

// 获取本机IMSI
// GetIMSI
// window.plugins.IMSI.GetIMSI();

if (!window.plugins) {
	window.plugins = {};
};

if (!window.plugins.IMSI) {
	window.plugins.IMSI = {};
};

window.plugins.IMSI.GetIMSI = function () {
	cordova.exec(function (Param) {
		alert(Param);
	}, function (Error) {
		console.log(Error);
	}, "IMSI", "GetIMSI", []);
};
