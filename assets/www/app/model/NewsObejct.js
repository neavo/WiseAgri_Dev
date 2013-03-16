Ext.define("Project.model.NewsObejct", {
	extend : "Ext.data.Model",
	config : {
		fields : [
			"NewsId",
			"NewsTitle",
			"NewsIconUrl",
			"NewsSkimNum",
			"NewsContent",
			"NewsImageUrl",
			"NewsVideoUrl",
			"NewsDateTime",
			"NewsPublisher",
		],
	},
});
