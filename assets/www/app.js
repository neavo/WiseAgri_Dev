Ext.application({
	name : "Project",

	requires : [
		"Ext.Toolbar",
		"Ext.MessageBox",
		"Ext.field.Text",
		"Ext.form.FieldSet",
		"Ext.field.Checkbox",
		"Ext.field.Password",
	],

	models : [],

	stores : [],

	views : [
		"Widget.BackBtn",
		
		"LoginView.LoginSelect",
		"HomeView.HomeView",
		
		"MainContainer",
	],

	controllers : [
		"Widget.BackBtn",
	
		"LoginView.LoginSelect",
	
		"MainController",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.MainContainer"));
	},
});
