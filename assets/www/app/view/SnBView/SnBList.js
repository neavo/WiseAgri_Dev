Ext.define("Project.view.SnBView.SnBList", {
	extend : "Ext.Container",
	xtype : "SnBList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "SnBListTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
			}, {
				id : "SnBListMain",
				xtype : "list",
				store : "SnBList",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				itemTpl : "<img class = SnBListIcon onerror = \" this.src = 'resources/image/DefaultIcon.png' \" src = {SnBIconUrl} />"
				 + "<div class = SnBListTitle><b>{SnBTitle}</b></div>"
				 + "<div class = SnBListDataTimePubliser>时间：{SnBDateTime}</div>"
				 + "<div class = SnBListDataTimePubliser>联系人：{SnBPublisher}</div>",
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
