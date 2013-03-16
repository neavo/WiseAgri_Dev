Ext.define("Project.store.NewsList", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.NewsObejct",
		proxy : {
			type : "ajax",
			url : ServerUrl + "GetNewsList.jsp",
			startParam : "PageStart",
			limitParam : "PageLimit",
		},
		pageSize : 5,
	},
});
