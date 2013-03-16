Ext.define("Project.view.MainContainer", {
	extend : "Ext.Container",
	xtype : "MainContainer",
	config : {
		layout : {
			type : "card",
			//animation : "slide",
		},
		items : [{
				xtype : "HomeView",
			}, {
				xtype : "NewsList",
			}, {
				xtype : "NewsDetail",
			},
		],
	},
});
