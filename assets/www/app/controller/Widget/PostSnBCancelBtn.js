Ext.define("Project.controller.Widget.PostSnBCancelBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			PostSnBCancelBtn : "PostSnBCancelBtn",
		},
		control : {
			PostSnBCancelBtn : {
				tap : "OnPostSnBCancelBtnTap",
			},
		},
	},
	OnPostSnBCancelBtnTap : function () {
		SwitchToPrev();
	},
});
