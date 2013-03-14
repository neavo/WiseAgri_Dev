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

		Ext.Ajax.request({
			url : "http://58.53.209.89:8090/mgweb/SynWebController",
			params : {
				cmd : "1001",
				param : "{\"userCatalog\":\"Catalog_4CE17B24242E644BAB4D1D7E79BE6ADD\",\"areaId\":\"AREA_5F6275C31212A2816A8343487022B77D\",\"columnId\":\"Column_4A3E96BFF8193648D13DFF95C650A5E0\"}",
			},
			　success : function (response) {
				var ResponseObject = eval("(" + decodeURIComponent(response.responseText) + ")");
				if (ResponseObject["status"] == "1") {
					DB.JsonObject = ResponseObject["json"];
					console.log(DB.JsonObject);
				};
			},
		});
	},
});
