Ext.define("Project.controller.LoginView.RegisterIdentity", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		Ext.getCmp("RegisterIdentityMain").addListener({
			itemtap : {
				fn : function (list, index, target, record, e, eOpts) {
					Ext.Msg.alert("", "注册成功！", function (buttonId, value, opt) {
						if (buttonId == "ok") {
							WipeSwitchHistory();
							SwitchToNext("HomeView");
						};
					});
				},
			},
		});
	},
});
