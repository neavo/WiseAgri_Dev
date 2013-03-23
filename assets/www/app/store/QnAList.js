Ext.define("Project.store.QnAList", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.QnAObejct",
		proxy : {
			type : "ajax",
			url : ServerUrl + "GetQnAList.jsp",
			startParam : "PageStart",
			limitParam : "PageLimit",
		},
		pageSize : 5,
	},
});
