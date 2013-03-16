Ext.define("Project.controller.Widget.NextBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			NextBtn : "NextBtn",
		},
		control : {
			NextBtn : {
				tap : "onNextBtnTap",
			},
		},
	},
	onNextBtnTap : function () {
		DB.ActivatedStore.nextPage({
			callback : function (records, operation, success) {
				if (records.length == 0 || !success) {
					DoAlert("当前已是最后一页！");
					DB.ActivatedStore.previousPage();
				};
			},
			scope : this,
		});
	},
});
