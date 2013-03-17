Ext.define("Project.view.SnBView.SnBDetail", {
	extend : "Ext.Container",
	xtype : "SnBDetail",
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
				id : "SnBDetailMain",
				xtype : "container",
				scrollable : "vertical",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "ToolBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "button",
						style : "color : white;",
						ui : "plain",
						text : "浏览：888 次",
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
