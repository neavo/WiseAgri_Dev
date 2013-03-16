Ext.define("Project.view.NewsView.NewsList", {
	extend : "Ext.Container",
	xtype : "NewsList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
				title : "新闻列表",
			}, {
				id : "NewsListMain",
				xtype : "list",
				store : "NewsList",
				itemTpl : "<img class = NewsListIcon onerror = \" this.src = 'resources/image/DefaultIcon.png' \" src = {NewsIconUrl} />"
				 + "<p class = NewsListTitle>{NewsTitle}</p>"
				 + "<p class = NewsListDatePubliser>时间：{NewsDateTime}</p>"
				 + "<p class = NewsListDatePubliser>来源：{NewsPublisher}</p>",
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
