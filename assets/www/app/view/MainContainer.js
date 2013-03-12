Ext.define("Project.view.MainContainer", {
	extend : "Ext.Container",
	xtype : "MainContainer",
	config : {
		layout : {
			type : "card",
		},
		items : [{
				xtype : "HomeView",
			}, {
				xtype : "LoginSelect",
			},
		],
	},
});
