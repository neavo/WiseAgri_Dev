Ext.define("Project.controller.Widget.BackBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			BackBtn : "BackBtn",
		},
		control : {
			BackBtn : {
				tap : "onBackBtnTap",
			},
		},
	},
	onBackBtnTap : function () {
		SwitchToPrev();
	},
});
