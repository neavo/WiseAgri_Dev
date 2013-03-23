Ext.define("Project.view.Widget.FeedBackBtn", {
	extend : "Ext.Button",
	xtype : "FeedBackBtn",
	config : {
		ui : "plain",
		height : DB.ScreenHeight * 0.09,
		html : "<img style = \"margin-top : 5%; height : 90%;\" src = resources/image/FeedBackBtn.png />",
	},
});
