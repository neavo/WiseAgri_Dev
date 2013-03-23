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
		"QnAObejct",
		"ExpertObejct",
	],

	stores : [
		"ChildCategory",
		"NewsList",
		"SnBList",
		"QnAList",
		"ExpertList",
	],

	views : [
		"Widget.PrevBtn", "Widget.NextBtn", "Widget.ShareBtn",

		"HomeView.HomeView",
		"CategoryView.CategoryList",
		"NewsView.NewsList", "NewsView.NewsDetail",	
		"SnBView.SnBList", "SnBView.SnBDetail",
		"QnAView.QnAList", "QnAView.QnADetail",
		"ExpertView.ExpertList", "ExpertView.ExpertDetail",

		"MainContainer",
	],

	controllers : [
		"Widget.PrevBtn", "Widget.NextBtn", "Widget.ShareBtn",

		"HomeView.HomeView",
		"CategoryView.CategoryList",
		"NewsView.NewsList",
		"SnBView.SnBList",
		"QnAView.QnAList",
		"ExpertView.ExpertList",
		
		"MainController",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.MainContainer"));
	},
});
