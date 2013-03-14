Ext.define("Project.view.LoginView.RegisterProduct", {
	extend : "Ext.Container",
	xtype : "RegisterProduct",
	config : {
		layout : "vbox",
		items : [{
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
				title : "请选择产品",
			}, {
				id : "RegisterProductMain",
				xtype : "list",
				flex : 1,
				itemTpl : "<img class = RegisterListIcon src = resources/icons/defaultIcon.png />"
				 + "<img class = RegisterListDisclosure src = resources/icons/disclosureIcon.png />"
				 + "<div class = RegisterListName>{ProductName}</div>",
				data : [{
						"ProductName" : "茶叶",
					}, {
						"ProductName" : "柑橘",
					}, {
						"ProductName" : "水产",
					},
				],
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "ToolBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "container",
						height : DB.ScreenHeight * 0.09,
						html : "<img style = \"margin-top : 5%; height : 90%;\" src = \"resources/icons/TelecomLogo.png\" />",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
