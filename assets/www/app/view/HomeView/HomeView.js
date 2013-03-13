Ext.define("Project.view.HomeView.HomeView", {
	extend : "Ext.Container",
	xtype : "HomeView",
	config : {
		layout : "vbox",
		style : "background : white;",
		items : [{
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
				title : "智 慧 农 业 • 湖 北",
			}, {
				id : "HomeViewMain",
				xtype : "container",
				flex : 1,
				layout : "vbox",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "BottomBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "BackBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
