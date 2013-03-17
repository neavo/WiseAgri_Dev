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
				var SnBDetailMain = Ext.getCmp("SnBDetailMain");
				SnBDetailMain.setHtml("<div style = \"background : #FFFFFF; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;\">");
				if (Data.SnBTitle != "") {
					SnBDetailMain.setHtml(SnBDetailMain.getHtml()
						 + "<div class = SnBDetailTitle>" + Data.SnBTitle + "</div>");
				};
				if (Data.SnBDateTime != "" && Data.SnBPublisher != "") {
					SnBDetailMain.setHtml(SnBDetailMain.getHtml()
						 + "<div class = SnBDetailDataTimePubliser>" + Data.SnBDateTime + "　来源：" + Data.SnBPublisher + "</div>"
						 + "<HR width = 100% color = #FFFFFF size = 1 noShade>");
				};
				if (Data.SnBContent != "") {
					SnBDetailMain.setHtml(SnBDetailMain.getHtml()
						 + "<div class = SnBDetailContent>" + Data.SnBContent + "</div>"
						 + "<div style = \" height : 0.25em \" ></div>");
				};
				if (Data.SnBImageUrl != "") {
					var SnBImageUrl = Data.SnBImageUrl.split(";")
						for (i = 0; i < SnBImageUrl.length; i++) {
							SnBDetailMain.setHtml(SnBDetailMain.getHtml()
								 + "<img class = SnBDetailImage src = " + SnBImageUrl[i] + " />"
								 + "<div style = \" height : 0.25em \" ></div>");
						};
				};
				SnBDetailMain.setHtml(SnBDetailMain.getHtml()
					 + "</div>"
					 + "<div style = \" height : 0.25em \" ></div>");
			}
		});
	},
});
