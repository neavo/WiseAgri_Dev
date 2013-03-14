Ext.define("Project.view.NewsView.NewsList", {
	extend : "Ext.Container",
	xtype : "NewsList",
	config : {
		layout : "vbox",
		items : [{
				id : "NewsListTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
				title : "新闻列表",
			}, {
				id : "NewsListMain",
				xtype : "list",
				flex : 1,
				itemTpl : "<img class = NewsListIcon src = resources/icons/defaultIcon.png /></div>"
				 + "<div class = NewsListTitle>{nTitle}</div>"
				 + "<div class = NewsListDatePubliser>时间：2012-12-12</div>"
				 + "<div class = NewsListDatePubliser>来源：地方政府</div>",
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
