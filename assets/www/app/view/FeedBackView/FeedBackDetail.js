Ext.define("Project.view.FeedBackView.FeedBackDetail", {
	extend : "Ext.Container",
	xtype : "FeedBackDetail",
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
				id : "FeedBackDetailMain",
				xtype : "container",
				scrollable : "vertical",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "ToolBar",
				items : [{
						xtype : "spacer",
					}, {
						id : "FeedBackSkimNumBtn",
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
