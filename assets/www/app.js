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

	models : [
		"CategoryObejct",
		"NewsObejct",
		"SnBObejct",
	],

	stores : [
		"NewsList",
		"ChildCategory",
		"SnBList",
	],

	views : [
		"Widget.PrevBtn", "Widget.NextBtn", "Widget.ShareBtn",

		"HomeView.HomeView",
		"CategoryView.CategoryList",
		"NewsView.NewsList", "NewsView.NewsDetail",	
		"SnBView.SnBList", "SnBView.SnBDetail",

		"MainContainer",
	],

	controllers : [
		"Widget.PrevBtn", "Widget.NextBtn", "Widget.ShareBtn",

		"HomeView.HomeView",
		"CategoryView.CategoryList",
		"NewsView.NewsList",
		"SnBView.SnBList",
		
		"MainController",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.MainContainer"));
	},
});
