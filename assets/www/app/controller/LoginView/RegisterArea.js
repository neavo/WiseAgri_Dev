Ext.define("Project.controller.LoginView.RegisterArea", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		Ext.getCmp("RegisterAreaMain").addListener({
			itemtap : {
				fn : function (list, index, target, record, e, eOpts) {
					SwitchToNext("RegisterProduct");
				},
			},
		});
	},
});
