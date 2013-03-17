Ext.define("Project.store.ChildCategory", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.CategoryObejct",
		proxy : {
			type : "ajax",
			url : ServerUrl + "GetChildCategory.jsp",
			startParam : "PageStart",
			limitParam : "PageLimit",
		},
		pageSize : 5,
	},
});
