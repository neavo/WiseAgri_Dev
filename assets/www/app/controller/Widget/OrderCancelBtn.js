Ext.define("Project.controller.Widget.OrderCancelBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			OrderCancelBtn : "OrderCancelBtn",
		},
		control : {
			OrderCancelBtn : {
				tap : "OnOrderCancelBtnTap",
			},
		},
	},
	OnOrderCancelBtnTap : function () {
		SwitchToPrev();
	},
});
