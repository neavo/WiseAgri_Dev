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
				xtype : "CategoryList",
			}, {
				xtype : "NewsList",
			}, {
				xtype : "NewsDetail",
			}, {
				xtype : "SnBList",
			}, {
				xtype : "SnBDetail",
			}, {
				xtype : "ExpertList",
			},
		],
	},
});
