Ext.define("Project.controller.NewsView.NewsList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		Ext.getCmp("NewsListMain").addListener({
			itemtap : {
				fn : function (list, index, target, record, e, eOpts) {
					SwitchToNext("NewsDetail");
					Ext.Ajax.request({
						url : ServerUrl + "GetNewsDetail.jsp",
						params : {
							"NewsId" : record.getData()["NewsId"],
						},
						success : function (response) {
							var ResponseObject = eval("(" + response.responseText + ")");
							var Data = ResponseObject["0"];
							var NewsDetailMain = Ext.getCmp("NewsDetailMain");
							NewsDetailMain.setHtml("<div style = \"background : #FFFFFF; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;\">");
							if (Data["NewsTitle"] != "") {
								NewsDetailMain.setHtml(NewsDetailMain.getHtml()
									 + "<div class = NewsDetailTitle>" + Data["NewsTitle"] + "</div>");
							};
							if (Data["NewsDateTime"] != "" && Data["NewsPublisher"] != "") {
								NewsDetailMain.setHtml(NewsDetailMain.getHtml()
									 + "<div class = NewsDetailDataTime>" + Data["NewsDateTime"] + "　来源：" + Data["NewsPublisher"] + "</div>"
									 + "<HR width = 100% color = #FFFFFF size = 1 noShade>");
							};
							if (Data["NewsContent"] != "") {
								NewsDetailMain.setHtml(NewsDetailMain.getHtml()
									 + "<div class = NewsDetailContent>" + Data["NewsContent"] + "</div>"
									 + "<div style = \" height : 0.25em \" ></div>");
							};
							if (Data["NewsImageUrl"] != "") {
								var NewsImageUrl = Data["NewsImageUrl"].split(";")
									for (i = 0; i < NewsImageUrl.length; i++) {
										NewsDetailMain.setHtml(NewsDetailMain.getHtml()
											 + "<img class = NewsDetailImage src = " + NewsImageUrl[i] + " />"
											 + "<div style = \" height : 0.25em \" ></div>");
									};
							};
							NewsDetailMain.setHtml(NewsDetailMain.getHtml()
								 + "</div>"
								 + "<div style = \" height : 0.25em \" ></div>");
						}
					});
				},
			},
		});
	},
});
