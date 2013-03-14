// 本地DateBase
var DB = [];
DB.ScreenWidth = document.body.scrollWidth;
DB.ScreenHeight = document.body.scrollHeight;

// PhoneGap相关
document.addEventListener("deviceready", function () {
	// 响应返回键
	document.addEventListener("backbutton", function () {
		SwitchToPrev();
	}, false);
}, false);

// 切换页面相关
DB.History = [];
function WipeSwitchHistory() {
	DB.History.splice(0, DB.History.length);
};
function SwitchToPrev() {
	DB.History.pop();
	if (DB.History.length == 0) {
		Ext.Msg.confirm("", "确定退出？", function (buttonId, value, opt) {
			if (buttonId == "yes") {
				navigator.app.exitApp();
			};
			if (buttonId == "no") {
				DB.History.push("HomeView");
			};
		});
	};
	if (DB.History.length != 0) {
		var View = DB.History[DB.History.length - 1];
		DB.MainContainer.setActiveItem(View);
	};
};
function SwitchToNext(View) {
	DB.History.push(View);
	DB.MainContainer.setActiveItem(View);
};

// 自定义的Alert
function DoAlert(msg) {
	Ext.Msg.alert("", msg);
};
