Ext.define("Project.controller.NewsView.NewsList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		Ext.getCmp("NewsListMain").addListener({
			itemtap : {
				fn : function (list, index, target, record, e, eOpts) {
					SwitchToNext("NewsDetail");
				},
			},
		});
	},
});
