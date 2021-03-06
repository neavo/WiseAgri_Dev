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
				id : "HomeViewTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
			}, {
				id : "HomeViewMain",
				xtype : "carousel",
				layout : "vbox",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "ToolBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "FeedBackBtn",
					}, {
						xtype : "spacer",
					}, {
						xtype : "OrderBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
