Ext.define("Project.view.SnBView.PostSnB", {
	extend : "Ext.Container",
	xtype : "PostSnB",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		style : "background : #FFFFFF;",
		items : [{
				id : "PostSnBTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
			}, {
				id : "PostSnBMain",
				xtype : "formpanel",
				baseCls : "SnBPostFormPanel",
				scrollable : "vertical",
				url : ServerUrl + "PostSnB.jsp",
				items : [{
						xtype : "selectfield",
						name : "SnBType",
						label : "供求选择",
						height : "2em",
						labelWidth : "5.5em",
						options : [{
								text : "供应信息",
								value : "0",
							}, {
								text : "求购信息",
								value : "1",
							},
						],
					}, {
						xtype : "textfield",
						name : "SnBTitle",
						height : "2em",
						label : "标　　题",
						labelWidth : "5.5em",
						placeHolder : "该项为必填项",
					}, {
						xtype : "textfield",
						name : "SnBPrice",
						height : "2em",
						label : "价　　格",
						labelWidth : "5.5em",
						placeHolder : "该项为必填项",
					}, {
						xtype : "textfield",
						name : "SnBArea",
						height : "2em",
						label : "地　　区",
						labelWidth : "5.5em",
						placeHolder : "该项为必填项",
					}, {
						xtype : "textfield",
						name : "SnBPublisher",
						height : "2em",
						label : "联系人名",
						labelWidth : "5.5em",
						placeHolder : "该项为必填项",
					}, {
						xtype : "textfield",
						name : "SnBPhone",
						height : "2em",
						label : "电话号码",
						labelWidth : "5.5em",
						placeHolder : "该项为必填项",
					}, {
						xtype : "textareafield",
						name : "SnBContent",
						maxRows : 15,
						label : "详细内容",
						labelWidth : "5.5em",
						placeHolder : "该项为必填项",
					}, {
						id : "SnBCategoryId",
						xtype : "textfield",
						name : "CategoryId",
						hidden : true,
					},
				],
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "ToolBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "PostSnBOKBtn",
					}, {
						xtype : "spacer",
					}, {
						xtype : "PostSnBCancelBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
