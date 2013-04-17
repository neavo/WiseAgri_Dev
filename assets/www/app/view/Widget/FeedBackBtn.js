Ext.define("Project.view.Widget.FeedBackBtn", {
	extend: "Ext.Button",
	xtype: "FeedBackBtn",
	config: {
		ui: "plain",
		html: "<img style = \"margin-top : 5%; height : 90%;\" src = resources/image/FeedBackBtn.png />",
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