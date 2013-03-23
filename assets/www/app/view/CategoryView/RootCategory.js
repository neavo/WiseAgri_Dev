Ext.define("Project.view.CategoryView.RootCategory", {
	extend : "Ext.Container",
	xtype : "RootCategory",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "RootCategoryTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
			}, {
				id : "RootCategoryMain",
				xtype : "list",
				store : "RootCategory",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				itemTpl : "<img class = RootCategoryIcon src = {CategoryIconUrl} />"
				 + "<img class = RootCategoryDisclosure src = resources/image/DisclosureIcon.png />"
				 + "<div class = RootCategoryName><b>{CategoryName}</b></div>",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "ToolBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "PrevBtn",
					}, {
						xtype : "spacer",
					}, {
						xtype : "NextBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
