Ext.define("Project.controller.MainController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			MainContainer : "MainContainer",
		},
		control : {},
	},
	launch : function () {
		DB.MainContainer = this;
		DB.MainContainer = this.getMainContainer();

		GetDefaultApp();
		GetDefaultCategory();

		DB.History.push("HomeView");
	},
});
