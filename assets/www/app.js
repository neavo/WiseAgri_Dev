Ext.application({
	name: "Project",

	requires: [
		"Ext.Toolbar",
		"Ext.MessageBox",
		"Ext.data.Store",
		"Ext.field.Text",
		"Ext.form.Panel",
		"Ext.field.Select",
		"Ext.dataview.List",
		"Ext.field.TextArea",
		"Ext.carousel.Carousel"],

	models: [
		"SnBObejct",
		"QnAObejct",
		"NewsObejct",
		"ExpertObejct",
		"FeedBackObject",
		"CategoryObejct",
		"BusinessCardObject"],

	stores: [
		"QnAList",
		"SnBList",
		"NewsList",
		"ExpertList",
		"RootCategory",
		"FeedBackList",
		"ChildCategory",
		"BusinessCardList"],

	views: [
		"Widget.PrevBtn", "Widget.NextBtn", "Widget.ShareBtn",
		"Widget.FeedBackBtn", "Widget.OrderBtn", "Widget.OrderOKBtn",
		"Widget.OrderCancelBtn", "Widget.PostSnBOKBtn", "Widget.PostSnBCancelBtn",
		"Widget.PostQnAOKBtn", "Widget.PostQnACancelBtn",

		"HomeView.HomeView",
		"FeedBackView.FeedBackList", "FeedBackView.FeedBackDetail",
		"OrderView.OrderView",
		"CategoryView.RootCategory", "CategoryView.ChildCategory",
		"NewsView.NewsList", "NewsView.NewsDetail",
		"SnBView.SnBList", "SnBView.SnBDetail", "SnBView.PostSnB",
		"QnAView.QnAList", "QnAView.QnADetail", "QnAView.PostQnA",
		"BusinessCard.BusinessCardList", "BusinessCard.BusinessCardDetail",
		"ExpertView.ExpertList", "ExpertView.ExpertDetail",
		"AgriWeather.AgriWeather",

		"MainContainer"],

	controllers: [
		"Widget.PrevBtn", "Widget.NextBtn", "Widget.ShareBtn",
		"Widget.FeedBackBtn", "Widget.OrderBtn", "Widget.OrderOKBtn",
		"Widget.OrderCancelBtn", "Widget.PostSnBOKBtn", "Widget.PostSnBCancelBtn",
		"Widget.PostQnAOKBtn", "Widget.PostQnACancelBtn",

		"HomeView.HomeView",
		"FeedBackView.FeedBackList",
		"CategoryView.RootCategory", "CategoryView.ChildCategory",
		"NewsView.NewsList",
		"SnBView.SnBList",
		"QnAView.QnAList",
		"ExpertView.ExpertList",
		"BusinessCard.BusinessCardList",

		"MainController"],

	launch: function() {
		Ext.Viewport.add(Ext.create("Project.view.MainContainer"));
	},
});