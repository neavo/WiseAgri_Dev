Ext.define("Project.controller.LoginView.LoginSelect", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		Ext.getCmp("DoRegisterBtn").addListener({
			tap : {
				fn : function () {
					if (Ext.getCmp("UserNameField").getValue() == "") {
						DoAlert("请输入账号！");
					} else if (Ext.getCmp("PassWordField").getValue() == "") {
						DoAlert("请输入密码！");
					} else {
						SwitchToNext("RegisterArea");
					};
				},
				element : "element",
			},
		});
		Ext.getCmp("DoLoginBtn").addListener({
			tap : {
				fn : function () {
					if (Ext.getCmp("UserNameField").getValue() == "") {
						DoAlert("请输入账号！");
					} else if (Ext.getCmp("PassWordField").getValue() == "") {
						DoAlert("请输入密码！");
					} else {
						SwitchToNext("HomeView");
					};
				},
				element : "element",
			},
		});
		Ext.getCmp("QuickBrowseBtn").addListener({
			tap : {
				fn : function () {
					SwitchToNext("HomeView");
				},
				element : "element",
			},
		});
	},
});
