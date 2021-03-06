Ext.define("Project.view.NewsView.NewsList", {
	extend : "Ext.Container",
	xtype : "NewsList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "NewsListTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
			}, {
				id : "NewsListMain",
				xtype : "list",
				store : "NewsList",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				itemTpl : "<img class = NewsListIcon onerror = \" this.src = 'resources/image/DefaultIcon.png' \" src = {NewsIconUrl} />"
				 + "<p class = NewsListTitle>{NewsTitle}</p>"
				 + "<p class = NewsListDateTimePubliser>时间：{NewsDateTime}</p>"
				 + "<p class = NewsListDateTimePubliser>来源：{NewsPublisher}</p>",
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
