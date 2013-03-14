Ext.define("Project.view.MainContainer", {
	extend : "Ext.Container",
	xtype : "MainContainer",
	config : {
		layout : {
			type : "card",
			//animation : "slide",
		},
		items : [{
				xtype : "LoginSelect",
			}, {
				xtype : "RegisterArea",
			}, {
				xtype : "RegisterProduct",
			}, {
				xtype : "RegisterIdentity",
			}, {
				xtype : "HomeView",
			}, {
				xtype : "NewsList",
			},
		],
	},
});
