Ext.define("Project.controller.QnAView.QnAList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			QnAListMain : "#QnAListMain",
		},
		control : {
			QnAListMain : {
				itemtap : "OnQnAListMainItemtap",
			},
		},
	},
	OnQnAListMainItemtap : function (list, index, target, record, e, eOpts) {
		var DATA = record.getData();
		SwitchToNext("QnADetail");
		Ext.Ajax.request({
			url : ServerUrl + "GetQnADetail.jsp",
			params : {
				"QId" : record.getData().QId,
			},
			success : function (response) {
				var QnADetailMain = Ext.getCmp("QnADetailMain");

				// 问题部分
				QnADetailMain.setHtml("<div style = \"background : #FFFFFF; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;\">");
				Ext.getCmp("QnASkimNumBtn").setText("浏览：" + (parseInt(DATA.QSkimNum)+1) + " 次");
				if (DATA.QPublisher != "") {
					QnADetailMain.setHtml(QnADetailMain.getHtml()
						 + "<div class = QnADetailContent>提问者：" + DATA.QPublisher + "</div>");
				};
				if (DATA.QDateTime != "") {
					QnADetailMain.setHtml(QnADetailMain.getHtml()
						 + "<div class = QnADetailContent>提问时间：" + DATA.QDateTime + "</div>");
				};
				if (DATA.QContent != "") {
					QnADetailMain.setHtml(QnADetailMain.getHtml()
						 + "<div class = QnADetailContent>提问内容：" + DATA.QContent + "</div>");
				};
				if (DATA.QImageUrl != "") {
					var QImageUrl = DATA.QImageUrl.split(";")
						for (i = 0; i < QImageUrl.length; i++) {
							QnADetailMain.setHtml(QnADetailMain.getHtml()
								 + "<img class = QnADetailImage src = " + QImageUrl[i] + " />"
								 + "<div style = \" height : 0.25em \" ></div>");
						};
				};
				QnADetailMain.setHtml(QnADetailMain.getHtml()
					 + "</div>"
					 + "<div style = \" height : 0.25em \" ></div>");

				// 回答部分
				var ResponseObject = eval("(" + response.responseText + ")");
				QnADetailMain.setHtml(QnADetailMain.getHtml()
					 + "<div style = \"background : #CEEA99; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;\">");
				if (ResponseObject && ResponseObject["0"]) {
					var Data = ResponseObject["0"];

					if (Data.APublisher != "") {
						QnADetailMain.setHtml(QnADetailMain.getHtml()
							 + "<div class = QnADetailContent>回答者：" + Data.APublisher + "</div>");
					};
					if (Data.ADateTime != "") {
						QnADetailMain.setHtml(QnADetailMain.getHtml()
							 + "<div class = QnADetailContent>回答时间：" + Data.ADateTime + "</div>");
					};
					if (Data.AContent != "") {
						QnADetailMain.setHtml(QnADetailMain.getHtml()
							 + "<div class = QnADetailContent>回答内容：" + Data.AContent + "</div>");
					};
					if (Data.AImageUrl != "") {
						var AImageUrl = Data.AImageUrl.split(";")
							for (i = 0; i < AImageUrl.length; i++) {
								QnADetailMain.setHtml(QnADetailMain.getHtml()
									 + "<img class = QnADetailImage src = " + AImageUrl[i] + " />"
									 + "<div style = \" height : 0.25em \" ></div>");
							};
					};
				} else {
					QnADetailMain.setHtml(QnADetailMain.getHtml()
						 + "<div class = QnADetailContent>回答者：暂无回答</div>");
					QnADetailMain.setHtml(QnADetailMain.getHtml()
						 + "<div class = QnADetailContent>回答时间：暂无回答</div>");
					QnADetailMain.setHtml(QnADetailMain.getHtml()
						 + "<div class = QnADetailContent>回答内容：暂无回答</div>");
				};
				QnADetailMain.setHtml(QnADetailMain.getHtml()
					 + "</div>"
					 + "<div style = \" height : 0.25em \" ></div>");
			},
		});
	},
});
