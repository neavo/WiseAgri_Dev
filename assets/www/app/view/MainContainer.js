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
				xtype : "FeedBackList",
			}, {
				xtype : "FeedBackDetail",
			}, {
				xtype : "OrderView",
			}, {
				xtype : "RootCategory",
			}, {
				xtype : "ChildCategory",
			}, {
				xtype : "NewsList",
			}, {
				xtype : "NewsDetail",
			}, {
				xtype : "SnBList",
			}, {
				xtype : "SnBDetail",
			}, {
				xtype : "PostSnB",
			}, {
				xtype : "QnAList",
			}, {
				xtype : "QnADetail",
			}, {
				xtype : "PostQnA",
			}, {
				xtype : "ExpertList",
			},
		],
	},
});
