Ext.define("Project.view.CategoryView.ChildCategory", {
	extend : "Ext.Container",
	xtype : "ChildCategory",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "ChildCategoryTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
			}, {
				id : "ChildCategoryMain",
				xtype : "list",
				store : "ChildCategory",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				itemTpl : "<img class = ChildCategoryIcon src = {CategoryIconUrl} />"
				 + "<img class = ChildCategoryDisclosure src = resources/image/DisclosureIcon.png />"
				 + "<div class = ChildCategoryName><b>{CategoryName}</b></div>",
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
