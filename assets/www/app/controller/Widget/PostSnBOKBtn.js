Ext.define("Project.controller.Widget.PostSnBOKBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			PostSnBOKBtn : "PostSnBOKBtn",
		},
		control : {
			PostSnBOKBtn : {
				tap : "OnPostSnBOKBtnTap",
			},
		},
	},
	OnPostSnBOKBtnTap : function () {
		var Data = Ext.getCmp("PostSnBMain").getValues();
		var Flag = true;
		for (var Key in Data) {
			if (Data[Key] == "") {
				Flag = false;
				break;
			};
		};
		if (Flag) {
			Ext.getCmp("PostSnBMain").submit({
				waitMsg : {
					xtype : "loadmask",
					message : "信息发布中 ...",
				},
				success : function (Form, Result) {
					Ext.Msg.alert("", "发布成功！", function (ButtonId, Value, Opts) {
						SwitchToPrev();
					});
				},
				failure : function (Form, Result) {
					Ext.Msg.alert("", "发布失败！", function (ButtonId, Value, Opts) {
						SwitchToPrev();
					});
				},
			});
		} else {
			Ext.Msg.alert("", "请输入完整信息！");
		};
	},
});
