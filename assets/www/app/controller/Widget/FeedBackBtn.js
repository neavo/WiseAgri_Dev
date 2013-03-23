Ext.define("Project.controller.Widget.FeedBackBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			FeedBackBtn : "FeedBackBtn",
		},
		control : {
			FeedBackBtn : {
				tap : "OnFeedBackBtnTap",
			},
		},
	},
	OnFeedBackBtnTap : function () {
		console.log("OnFeedBackBtnTap");
	},
});
