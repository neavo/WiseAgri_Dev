Ext.define("Project.controller.SnBView.SnBList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			SnBListMain : "#SnBListMain",
		},
		control : {
			SnBListMain : {
				itemtap : "OnSnBListMainItemtap",
			},
		},
	},
	OnSnBListMainItemtap : function (list, index, target, record, e, eOpts) {
		SwitchToNext("SnBDetail");
		Ext.Ajax.request({
			url : ServerUrl + "GetSnBDetail.jsp",
			params : {
				"SnBId" : record.getData().SnBId,
			},
			success : function (response) {
				var ResponseObject = eval("(" + response.responseText + ")");
				var Data = ResponseObject["0"];
				var Content = "<div style = \"background : #FFFFFF; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;\">";
				Ext.getCmp("SnBSkimNumBtn").setText("浏览：" + Data.SnBSkimNum + " 次");
				if (Data.SnBTitle != "") {
					Content = Content
						 + "<div class = SnBDetailTitle>" + Data.SnBTitle + "</div>";
				};
				if (Data.SnBDateTime != "" && Data.SnBPublisher != "") {
					Content = Content
						 + "<div class = SnBDetailDataTimePubliser>" + Data.SnBDateTime + "　来源：" + Data.SnBPublisher + "</div>"
						 + "<HR width = 100% color = #FFFFFF size = 1 noShade>";
				};
				if (Data.SnBPrice != "") {
					Content = Content
						 + "<div class = SnBDetailContent>" + "价格：" + Data.SnBPrice + "</div>"
						 + "<div style = \" height : 0.25em \" ></div>";
				};
				if (Data.SnBArea != "") {
					Content = Content
						 + "<div class = SnBDetailContent>" + "地区：" + Data.SnBArea + "</div>"
						 + "<div style = \" height : 0.25em \" ></div>";
				};
				if (Data.SnBPublisher != "") {
					Content = Content
						 + "<div class = SnBDetailContent>" + "联系人：" + Data.SnBPublisher + "</div>"
						 + "<div style = \" height : 0.25em \" ></div>";
				};
				if (Data.SnBPhone != "") {
					Content = Content
						 + "<div class = SnBDetailContent>" + "电话号码：" + "<a href = \"tel:" + Data.SnBPhone + "\">" + Data.SnBPhone + "</a>" + "</div>"
						 + "<div style = \" height : 0.25em \" ></div>";
				};
				if (Data.SnBContent != "") {
					Content = Content
						 + "<div class = SnBDetailContent>" + "详细内容：" + Data.SnBContent + "</div>"
						 + "<div style = \" height : 0.25em \" ></div>";
				};
				if (Data.SnBImageUrl != "") {
					var SnBImageUrl = Data.SnBImageUrl.split(";")
						for (i = 0; i < SnBImageUrl.length; i++) {
							Content = Content
								 + "<img class = SnBDetailImage src = " + SnBImageUrl[i] + " />"
								 + "<div style = \" height : 0.25em \" ></div>";
						};
				};
				Ext.getCmp("SnBDetailMain").setHtml(Content
					 + "</div>"
					 + "<div style = \" height : 0.25em \" ></div>");
			},
		});
	},
});
