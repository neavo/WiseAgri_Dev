Ext.define("Project.store.RootCategory", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.CategoryObejct",
		proxy : {
			type : "ajax",
			url : ServerUrl + "GetRootCategory.jsp",
			startParam : "PageStart",
			limitParam : "PageLimit",
		},
		pageSize : 5,
	},
});
