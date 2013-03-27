Ext.define("Project.view.FeedBackView.FeedBackList", {
	extend : "Ext.Container",
	xtype : "FeedBackList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
				title : "建议反馈",
			}, {
				id : "FeedBackListMain",
				xtype : "list",
				store : "FeedBackList",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				itemTpl : "<img class = FeedBackListIcon onerror = \" this.src = 'resources/image/DefaultIcon.png' \" src = {CImageUrl} />"
				 + "<div class = FeedBackListContent><b>{CContent}</b></div>"
				 + "<div class = FeedBackListDataTimePubliser>时间：{CDateTime}</div>"
				 + "<div class = FeedBackListDataTimePubliser>联系人：{CPublisher}</div>",
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
