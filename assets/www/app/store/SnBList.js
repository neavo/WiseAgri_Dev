Ext.define("Project.store.SnBList", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.SnBObejct",
		proxy : {
			type : "ajax",
			url : ServerUrl + "GetSnBList.jsp",
			startParam : "PageStart",
			limitParam : "PageLimit",
		},
		pageSize : 5,
	},
});
