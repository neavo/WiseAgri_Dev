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
				itemHeight : DB.ScreenHeight * 0.164,
				variableHeights : false,
				scrollable : false,
				itemTpl : "<img class = NewsListIcon style = \" max-height : " + DB.ScreenHeight * 0.163 * 0.8 + "px ; margin-top : -" + DB.ScreenHeight * 0.163 * 0.025 + "px ; \" src = resources/icons/defaultIcon.png />"
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
