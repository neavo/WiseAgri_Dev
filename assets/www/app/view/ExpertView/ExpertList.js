Ext.define("Project.view.ExpertView.ExpertList", {
	extend : "Ext.Container",
	xtype : "ExpertList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "ExpertListTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
			}, {
				id : "ExpertListMain",
				xtype : "list",
				store : "ExpertList",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				itemTpl : "<img class = ExpertListIcon onerror = \" this.src = 'resources/image/DefaultIcon.png' \" src = {ExpertIconUrl} />"
				 + "<div class = ExpertListName><b>{ExpertName}</b></div>"
				 + "<div class = ExpertListTitlePosition>职称：{ExpertTitle}</div>"
				 + "<div class = ExpertListTitlePosition>职位：{ExpertPosition}</div>",
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
