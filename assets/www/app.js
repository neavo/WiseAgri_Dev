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
	],

	stores : [
		"NewsList",
		"ChildCategory",
	],

	views : [
		"Widget.PrevBtn", "Widget.NextBtn", "Widget.ShareBtn",

		"HomeView.HomeView",
		"NewsView.NewsList", "NewsView.NewsDetail",
		"CategoryView.CategoryList",

		"MainContainer",
	],

	controllers : [
		"Widget.PrevBtn", "Widget.NextBtn", "Widget.ShareBtn",

		"HomeView.HomeView",
		"NewsView.NewsList",
		"CategoryView.CategoryList",

		"MainController",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.MainContainer"));
	},
});
