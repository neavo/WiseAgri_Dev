Ext.define("Project.view.NewsView.NewsDetail", {
	extend : "Ext.Container",
	xtype : "NewsDetail",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
				title : "详细信息",
			}, {
				id : "NewsDetailMain",
				xtype : "container",
				scrollable : "vertical",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "ToolBar",
				items : [{
						xtype : "spacer",
					}, {
						id : "NewsSkimNumBtn",
						xtype : "button",
						style : "color : white;",
						ui : "plain",
					}, {
						xtype : "spacer",
					}, {
						xtype : "ShareBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
