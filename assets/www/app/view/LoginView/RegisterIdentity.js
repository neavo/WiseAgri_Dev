Ext.define("Project.view.LoginView.RegisterIdentity", {
	extend : "Ext.Container",
	xtype : "RegisterIdentity",
	config : {
		layout : "vbox",
		items : [{
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
				title : "请选择用户身份",
			}, {
				id : "RegisterIdentityMain",
				xtype : "list",
				flex : 1,
				itemTpl : "<img class = RegisterListIcon src = resources/icons/defaultIcon.png />"
				 + "<img class = RegisterListDisclosure src = resources/icons/disclosureIcon.png />"
				 + "<div class = RegisterListName>{IdentityName}</div>",
				data : [{
						"IdentityName" : "政企用户",
					}, {
						"IdentityName" : "农民用户",
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
