Ext.define("Project.store.BusinessCardList", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.BusinessCardObject",
		proxy : {
			type : "ajax",
			url : ServerUrl + "GetBusinessCardList.jsp",
			startParam : "PageStart",
			limitParam : "PageLimit",
		},
		pageSize : 5,
	},
});
