Ext.define("Project.controller.Widget.ShareBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			ShareBtn : "ShareBtn",
		},
		control : {
			ShareBtn : {
				tap : "OnShareBtnTap",
			},
		},
	},
	OnShareBtnTap : function (btn, e, eOpts) {
		if (window.plugins.share) {
			window.plugins.share.show({
				subject : "",
				text : "来自 “智慧农业 • 湖北” 手机客户端（http://www.118328.com/szwap）的分享！",
			},
				function () {
				DoAlert("分享成功！");
			},
				function () {
				DoAlert("分享失败！");
			});
		};
	},
});
