Ext.define("Project.view.QnAView.PostQnA", {
	extend : "Ext.Container",
	xtype : "PostQnA",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		style : "background : #FFFFFF;",
		items : [{
				id : "PostQnATop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
			}, {
				id : "PostQnAMain",
				xtype : "formpanel",
				baseCls : "QnAPostFormPanel",
				scrollable : "vertical",
				url : ServerUrl + "PostQnA.jsp",
				items : [{
						xtype : "textfield",
						name : "QnAPublisher",
						height : "2em",
						label : "联系人名",
						labelWidth : "5.5em",
						placeHolder : "该项为必填项",
					}, {
						xtype : "textfield",
						name : "QnAPhone",
						height : "2em",
						label : "电话号码",
						labelWidth : "5.5em",
						placeHolder : "该项为必填项",
					}, {
						xtype : "textareafield",
						name : "QnAContent",
						maxRows : 20,
						label : "详细内容",
						labelWidth : "5.5em",
						placeHolder : "该项为必填项",
					}, {
						id : "QnACategoryId",
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
						xtype : "PostQnAOKBtn",
					}, {
						xtype : "spacer",
					}, {
						xtype : "PostQnACancelBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
