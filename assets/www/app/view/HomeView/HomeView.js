Ext.define("Project.view.HomeView.HomeView", {
	extend : "Ext.Container",
	xtype : "HomeView",
	config : {
		layout : "vbox",
		style : "background : white;",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
				title : "智 慧 农 业 • 湖 北",
			}, {
				id : "HomeViewMain",
				xtype : "container",
				layout : "vbox",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "ToolBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "container",
						height : DB.ScreenHeight * 0.09,
						html : "<img style = \"margin-top : 5%; height : 90%;\" src = resources/image/FeedBackBtn.png />",
					}, {
						xtype : "spacer",
					}, {
						id : "DoOrderBtn",
						xtype : "container",
						height : DB.ScreenHeight * 0.09,
						html : "<img style = \"margin-top : 5%; height : 90%;\" src = resources/image/DoOrderBtn.png />",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
