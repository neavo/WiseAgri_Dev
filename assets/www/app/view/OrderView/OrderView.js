Ext.define("Project.view.OrderView.OrderView", {
	extend : "Ext.Container",
	xtype : "OrderView",
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
				title : "频道订阅",
			}, {
				id : "OrderViewMain",
				xtype : "carousel",
				layout : "vbox",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "ToolBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "OrderOKBtn",
					}, {
						xtype : "spacer",
					}, {
						xtype : "OrderCancelBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
