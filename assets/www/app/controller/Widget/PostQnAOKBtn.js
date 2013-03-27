Ext.define("Project.controller.Widget.PostQnAOKBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			PostQnAOKBtn : "PostQnAOKBtn",
		},
		control : {
			PostQnAOKBtn : {
				tap : "OnPostQnAOKBtnTap",
			},
		},
	},
	OnPostQnAOKBtnTap : function () {
		var Data = Ext.getCmp("PostQnAMain").getValues();
		var Flag = true;
		for (var Key in Data) {
			if (Data[Key] == "") {
				Flag = false;
				break;
			};
		};
		if (Flag) {
			Ext.getCmp("PostQnAMain").submit({
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
