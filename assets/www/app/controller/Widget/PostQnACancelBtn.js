Ext.define("Project.controller.Widget.PostQnACancelBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			PostQnACancelBtn : "PostQnACancelBtn",
		},
		control : {
			PostQnACancelBtn : {
				tap : "OnPostQnACancelBtnTap",
			},
		},
	},
	OnPostQnACancelBtnTap : function () {
		SwitchToPrev();
	},
});
