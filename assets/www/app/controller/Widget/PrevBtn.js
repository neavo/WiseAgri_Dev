Ext.define("Project.controller.Widget.PrevBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			PrevBtn : "PrevBtn",
		},
		control : {
			PrevBtn : {
				tap : "onPrevBtnTap",
			},
		},
	},
	onPrevBtnTap : function () {
		if (DB.ActivatedStore.currentPage == 1) {
			DoAlert("当前已是第一页！");
		} else {
			DB.ActivatedStore.previousPage();
		};
	},
});
