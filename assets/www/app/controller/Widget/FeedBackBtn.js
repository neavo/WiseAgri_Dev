Ext.define("Project.controller.Widget.FeedBackBtn", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			FeedBackBtn: "FeedBackBtn",
		},
		control: {
			FeedBackBtn: {
				tap: "OnFeedBackBtnTap",
			},
		},
	},
	OnFeedBackBtnTap: function() {
		SwitchToNext("FeedBackList");
		StoreLoad(Ext.getCmp("FeedBackListMain").getStore(), 1, {
			"AppId": DB.DefaultApp["0"]["AppId"],
		});
	},
});