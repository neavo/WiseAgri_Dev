Ext.define("Project.view.QnAView.QnAList", {
	extend : "Ext.Container",
	xtype : "QnAList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "QnAListTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
			}, {
				id : "QnAListMain",
				xtype : "list",
				store : "QnAList",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				itemTpl : "<img class = QnAListIcon onerror = \" this.src = 'resources/image/DefaultIcon.png' \" src = {QImageUrl} />"
				 + "<div class = QnAListContent><b>{QContent}</b></div>"
				 + "<div class = QnAListDataTimePubliser>时间：{QDateTime}</div>"
				 + "<div class = QnAListDataTimePubliser>联系人：{QPublisher}</div>",
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
