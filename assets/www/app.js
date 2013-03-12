Ext.application({
	name : "Project",

	requires : [
		"Ext.Toolbar",
		"Ext.field.Text",
		"Ext.form.FieldSet",
	],

	models : [],

	stores : [],

	views : [
		"LoginView.LoginSelect",
		"HomeView.HomeView",
		
		"MainContainer",
	],

	controllers : [
		"MainController",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.MainContainer"));
	},
});
