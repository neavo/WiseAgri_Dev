Ext.define("Project.store.FeedBackList", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.FeedBackObject",
		proxy : {
			type : "ajax",
			url : ServerUrl + "GetFeedBackList.jsp",
			startParam : "PageStart",
			limitParam : "PageLimit",
		},
		pageSize : 5,
	},
});
