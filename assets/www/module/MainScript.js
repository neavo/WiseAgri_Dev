// 服务器数据相关
var ServerUrl = "http://221.235.190.13:8080/WiseAgriAjax_Dev/";
//var ServerUrl = "http://192.168.1.101:8081/WiseAgriAjax_Dev/";

// 本地DateBase相关
var DB = [];
DB.ScreenWidth = document.body.scrollWidth;
DB.ScreenHeight = document.body.scrollHeight;

// 本地数据读取相关
DB.OrderApp = [];
DB.OrderAppLoaded = false;
function GetOrderApp() {
	DB.OrderAppLoaded = false;
	var JsonString = localStorage.getItem("OrderApp");
	if (JsonString && JsonString != "") {
		DB.OrderApp = JSON.parse(JsonString);
	};
	DB.OrderAppLoaded = true;
};
DB.DefaultApp = [];
DB.DefaultAppLoaded = false;
function GetDefaultApp() {
	DB.DefaultAppLoaded = false;
	Ext.Ajax.request({
		url : "data/DefaultApp.json",
		success : function (response) {
			DB.DefaultApp = eval("(" + response.responseText + ")");
			DB.DefaultAppLoaded = true;
		},
	});
};
DB.DefaultCategory = [];
DB.DefaultCategoryLoaded = false;
function GetDefaultCategory() {
	DB.DefaultCategoryLoaded = false;
	Ext.Ajax.request({
		url : "data/DefaultCategory.json",
		success : function (response) {
			DB.DefaultCategory = eval("(" + response.responseText + ")");
			DB.DefaultCategoryLoaded = true;
		},
	});
};

// PhoneGap相关
document.addEventListener("deviceready", function () {
	// 响应返回键
	document.addEventListener("backbutton", function () {
		SwitchToPrev();
	}, false);
}, false);

// 切换页面相关
DB.History = [];
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

// Alert相关
function DoAlert(msg) {
	Ext.Msg.alert("", msg);
};

// Store相关
DB.ActivatedStore = "";
function StoreLoad(Store, Page, Params) {
	DB.ActivatedStore = Store;
	Store.getProxy().setExtraParams(Params);
	Store.loadPage(Page);
};

// 自定义的LoadMasked相关
function ShowMasked() {
	Ext.Viewport.setMasked({
		xtype : "loadmask",
		message : "载入中 ...",
	});
};
function HideMasked() {
	Ext.Viewport.setMasked(false);
};
