Ext.define("Project.model.QnAObejct", {
	extend : "Ext.data.Model",
	config : {
		fields : [
			"QId",
			"QContent",
			"QImageUrl",
			"QPublisher",
			"QDateTime",
			"QSkimNum",
		],
	},
});
