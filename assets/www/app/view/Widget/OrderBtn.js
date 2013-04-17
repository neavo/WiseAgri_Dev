Ext.define("Project.view.Widget.OrderBtn", {
	extend: "Ext.Button",
	xtype: "OrderBtn",
	config: {
		ui: "plain",
		html: "<img style = \"margin-top : 5%; height : 90%;\" src = resources/image/DoOrderBtn.png />",
		listeners: {
			initialize: {
				fn: function(Container) {
					Container.setHeight(Ext.Viewport.getWindowHeight() * 0.075);
				},
				single: true,
			},
		},
	},
});