Ext.define("Project.controller.LoginView.RegisterProduct", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		Ext.getCmp("RegisterProductMain").addListener({
			itemtap : {
				fn : function (list, index, target, record, e, eOpts) {
					SwitchToNext("RegisterIdentity");
				},
			},
		});
	},
});
