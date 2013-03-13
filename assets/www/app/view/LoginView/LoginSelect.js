Ext.define("Project.view.LoginView.LoginSelect", {
	extend : "Ext.Container",
	xtype : "LoginSelect",
	config : {
		layout : "vbox",
		items : [{
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
				title : "智 慧 农 业 • 湖 北",
			}, {
				xtype : "fieldset",
				flex : 1,
				width : "90%",
				centered : true,
				items : [{
						id : "UserNameField",
						xtype : "textfield",
						label : "账　　号",
						placeHolder : "请输入账号 ... ",
					}, {
						id : "PassWordField",
						xtype : "passwordfield",
						label : "密　　码",
						placeHolder : "请输入密码 ... ",
					}, {
						xtype : "checkboxfield",
						label : "记住密码",
					}, {
						xtype : "container",
						layout : "hbox",
						margin : "0.5em 0 0.5em 0",
						items : [{
								xtype : "spacer",
							}, {
								id : "DoRegisterBtn",
								xtype : "button",
								text : "注册",
								width : "45%",
								ui : "plain",
								iconMask : true,
								style : "background : #33B5E5;	color : white; border : 1px solid #808080;",
							}, {
								xtype : "spacer",
							}, {
								id : "DoLoginBtn",
								xtype : "button",
								text : "登陆",
								width : "45%",
								ui : "plain",
								iconMask : true,
								style : "background : #33B5E5;	color : white; border : 1px solid #808080;",
							}, {
								xtype : "spacer",
							},
						],
					}, {
						xtype : "container",
						layout : "hbox",
						margin : "0.5em 0 0.5em 0",
						items : [{
								xtype : "spacer",
							}, {
								id : "QuickBrowseBtn",
								xtype : "button",
								text : "快速浏览",
								width : "93.75%",
								ui : "plain",
								iconMask : true,
								style : "background : #33B5E5;	color : white; border : 1px solid #808080;",
							}, {
								xtype : "spacer",
							},
						],
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
