Ext.application({
	name : "Project",

	requires : [
		"Ext.Toolbar",
		"Ext.MessageBox",
		"Ext.data.Store",
		"Ext.field.Text",
		"Ext.dataview.List",
		"Ext.form.FieldSet",
		"Ext.field.Checkbox",
		"Ext.field.Password",
	],

	models : [],

	stores : [],

	views : [
		"Widget.BackBtn", "Widget.PrevBtn", "Widget.NextBtn",
		
		"LoginView.LoginSelect", "LoginView.RegisterArea", "LoginView.RegisterProduct", "LoginView.RegisterIdentity",
		"HomeView.HomeView",
		"NewsView.NewsList", "NewsView.NewsDetail",
		
		"MainContainer",
	],

	controllers : [
		"Widget.BackBtn",
	
		"LoginView.LoginSelect", "LoginView.RegisterArea", "LoginView.RegisterProduct", "LoginView.RegisterIdentity",
		"HomeView.HomeView",
		"NewsView.NewsList",
	
		"MainController",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.MainContainer"));
	},
});
