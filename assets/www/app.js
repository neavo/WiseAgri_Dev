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
		"Ext.carousel.Carousel",
	],

	models : [
		"CategoryObejct",
		"NewsObejct",
		"SnBObejct",
		"QnAObejct",
		"ExpertObejct",
	],

	stores : [
		"RootCategory",
		"ChildCategory",
		"NewsList",
		"SnBList",
		"QnAList",
		"ExpertList",
	],

	views : [
		"Widget.PrevBtn", "Widget.NextBtn", "Widget.ShareBtn",
		"Widget.FeedBackBtn", "Widget.OrderBtn", "Widget.OrderOKBtn",
		"Widget.OrderCancelBtn",

		"HomeView.HomeView",
		"OrderView.OrderView",
		"CategoryView.RootCategory", "CategoryView.ChildCategory",
		"NewsView.NewsList", "NewsView.NewsDetail",
		"SnBView.SnBList", "SnBView.SnBDetail",
		"QnAView.QnAList", "QnAView.QnADetail",
		"ExpertView.ExpertList", "ExpertView.ExpertDetail",

		"MainContainer",
	],

	controllers : [
		"Widget.PrevBtn", "Widget.NextBtn", "Widget.ShareBtn",
		"Widget.FeedBackBtn", "Widget.OrderBtn", "Widget.OrderOKBtn",
		"Widget.OrderCancelBtn",

		"HomeView.HomeView",
		"CategoryView.RootCategory", "CategoryView.ChildCategory",
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
