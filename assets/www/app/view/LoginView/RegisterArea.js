Ext.define("Project.view.LoginView.RegisterArea", {
	extend : "Ext.Container",
	xtype : "RegisterArea",
	config : {
		layout : "vbox",
		items : [{
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
				title : "请选择地域",
			}, {
				id : "RegisterAreaMain",
				xtype : "list",
				flex : 1,
				itemTpl : "<img class = RegisterListIcon src = resources/icons/defaultIcon.png />"
				 + "<img class = RegisterListDisclosure src = resources/icons/disclosureIcon.png />"
				 + "<div class = RegisterListName>{AreaName}</div>",
				data : [{
						"AreaName" : "武汉",
					}, {
						"AreaName" : "黄石",
					}, {
						"AreaName" : "黄冈",
					}, {
						"AreaName" : "咸宁",
					}, {
						"AreaName" : "恩施",
					}, {
						"AreaName" : "荆州",
					}, {
						"AreaName" : "襄阳",
					}, {
						"AreaName" : "宜昌",
					}, {
						"AreaName" : "十堰",
					},
				],
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "BottomBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "BackBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
