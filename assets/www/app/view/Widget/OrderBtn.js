Ext.define("Project.view.Widget.OrderBtn", {
	extend : "Ext.Button",
	xtype : "OrderBtn",
	config : {
		ui : "plain",
		height : DB.ScreenHeight * 0.09,
		html : "<img style = \"margin-top : 5%; height : 90%;\" src = resources/image/DoOrderBtn.png />",
	},
});
