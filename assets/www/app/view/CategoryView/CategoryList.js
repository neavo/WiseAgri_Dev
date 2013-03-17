Ext.define("Project.view.CategoryView.CategoryList", {
	extend : "Ext.Container",
	xtype : "CategoryList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "CategoryListTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
			}, {
				id : "CategoryListMain",
				xtype : "list",
				store : "ChildCategory",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				itemTpl : "<img class = CategoryListIcon src = {CategoryIconUrl} />"
				 + "<img class = CategoryListDisclosure src = resources/image/DisclosureIcon.png />"
				 + "<div class = CategoryListName><b>{CategoryName}</b></div>",
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
