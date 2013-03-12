Ext.define("Project.view.LoginView.LoginSelect", {
	extend : "Ext.Container",
	xtype : "LoginSelect",
	config : {
		layout : "vbox",
		items : [{
				id : "LoginSelectTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
				title : "智 慧 农 业",
			}, {
				id : "LoginSelectMain",
				xtype : "fieldset",
				flex : 1,
				width : "90%",
				centered : true,
				items : [{
						xtype : "textfield",
						label : "用户名：",
					}, {
						xtype : "textfield",
						label : "密　码：",
					}, {
						xtype : "container",
						layout : "hbox",
						margin : "0.5em 0 0.5em 0",
						items : [{
								xtype : "spacer",
							}, {
								xtype : "button",
								text : "注册",
								width : "45%",
							}, {
								xtype : "spacer",
							}, {
								xtype : "button",
								text : "登陆",
								width : "45%",
							}, {
								xtype : "spacer",
							},
						],
					},
				],
			}, {
				id : "LoginSelectBottom",
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "BottomBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "button",
						icon : "resources/icons/whiteIcon.png",
						ui : "plain",
						iconCls : "reply",
						iconMask : true,
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
