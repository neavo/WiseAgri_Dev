Ext.define("Project.store.ExpertList", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.ExpertObejct",
		proxy : {
			type : "ajax",
			url : ServerUrl + "GetExpertList.jsp",
			startParam : "PageStart",
			limitParam : "PageLimit",
		},
		pageSize : 5,
	},
});
