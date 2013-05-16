Ext.define("Project.view.BusinessCard.BusinessCardDetail", {
	extend: "Ext.Container",
	xtype: "BusinessCardDetail",
	config: {
		layout: "vbox",
		defaults: {
			flex: 1,
		},
		items: [{
			xtype: "toolbar",
			docked: "top",
			baseCls: "ToolBar",
			title: "详细信息",
		}, {
			id: "BusinessCardDetailMain",
			xtype: "container",
			scrollable: "vertical",
		}, {
			xtype: "toolbar",
			docked: "bottom",
			baseCls: "ToolBar",
			items: [{
				xtype: "spacer",
			}, {
				xtype: "ShareBtn",
			}, {
				xtype: "spacer",
			}],
		}],
	},
});