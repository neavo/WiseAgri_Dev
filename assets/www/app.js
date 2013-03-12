Ext.application({
	name : "Project",

	requires : [],

	models : [],

	stores : [],

	views : [
		"MainContainer",
	],

	controllers : [
		"MainController",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.MainContainer"));
	},
});
