Ext.define("Project.controller.FeedBackView.FeedBackList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			FeedBackListMain : "#FeedBackListMain",
		},
		control : {
			FeedBackListMain : {
				itemtap : "OnFeedBackListMainItemtap",
			},
		},
	},
	OnFeedBackListMainItemtap : function (list, index, target, record, e, eOpts) {
		var DATA = record.getData();
		SwitchToNext("FeedBackDetail");
		Ext.Ajax.request({
			url : ServerUrl + "GetFeedBackDetail.jsp",
			params : {
				"CId" : record.getData().CId,
			},
			success : function (response) {

				// 问题部分
				var Content = "<div style = \"background : #FFFFFF; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;\">";
				Ext.getCmp("FeedBackSkimNumBtn").setText("浏览：" + (parseInt(DATA.CSkimNum) + 1) + " 次");
				if (DATA.CPublisher != "") {
					Content = Content
						 + "<div class = FeedBackDetailContent>建议者：" + DATA.CPublisher + "</div>";
				};
				if (DATA.CDateTime != "") {
					Content = Content
						 + "<div class = FeedBackDetailContent>建议时间：" + DATA.CDateTime + "</div>";
				};
				if (DATA.CContent != "") {
					Content = Content
						 + "<div class = FeedBackDetailContent>建议内容：" + DATA.CContent + "</div>";
				};
				if (DATA.CImageUrl != "") {
					var CImageUrl = DATA.CImageUrl.split(";")
						for (i = 0; i < CImageUrl.length; i++) {
							Content = Content
								 + "<img class = FeedBackDetailImage src = " + CImageUrl[i] + " />"
								 + "<div style = \" height : 0.25em \" ></div>";
						};
				};
				Content = Content
					 + "</div>"
					 + "<div style = \" height : 0.25em \" ></div>";

				// 回答部分
				Content = Content
					 + "<div style = \"background : #CEEA99; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;\">";
				var ResponseObject = eval("(" + response.responseText + ")");
				if (ResponseObject && ResponseObject["0"]) {
					var Data = ResponseObject["0"];
					if (Data.FPublisher != "") {
						Content = Content
							 + "<div class = FeedBackDetailContent>答复者：" + Data.FPublisher + "</div>";
					};
					if (Data.FDateTime != "") {
						Content = Content
							 + "<div class = FeedBackDetailContent>答复时间：" + Data.FDateTime + "</div>";
					};
					if (Data.FContent != "") {
						Content = Content
							 + "<div class = FeedBackDetailContent>答复内容：" + Data.FContent + "</div>";
					};
					if (Data.FImageUrl != "") {
						var FImageUrl = Data.FImageUrl.split(";")
							for (i = 0; i < FImageUrl.length; i++) {
								Content = Content
									 + "<img class = FeedBackDetailImage src = " + FImageUrl[i] + " />"
									 + "<div style = \" height : 0.25em \" ></div>";
							};
					};
				} else {
					Content = Content
						 + "<div class = FeedBackDetailContent>答复者：暂无答复</div>"
						 + "<div class = FeedBackDetailContent>答复时间：暂无答复</div>"
						 + "<div class = FeedBackDetailContent>答复内容：暂无答复</div>";
				};
				Ext.getCmp("FeedBackDetailMain").setHtml(Content
					 + "</div>"
					 + "<div style = \" height : 0.25em \" ></div>");
			},
		});
	},
});
