Ext.define("Project.view.ExpertView.ExpertDetail", {
	extend : "Ext.Container",
	xtype : "ExpertDetail",
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
				id : "ExpertDetailMain",
				xtype : "container",
				scrollable : "vertical",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "ToolBar",
				items : [{
						xtype : "spacer",
					}, {
						id : "ExpertSkimNumBtn",
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
