Ext.define("Project.controller.ExpertView.ExpertList", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			ExpertListMain: "#ExpertListMain",
		},
		control: {
			ExpertListMain: {
				itemtap: "OnExpertListMainItemtap",
			},
		},
	},
	OnExpertListMainItemtap: function(list, index, target, record, e, eOpts) {
		SwitchToNext("ExpertDetail");
		Ext.Ajax.request({
			url: ServerUrl + "GetExpertDetail.jsp",
			params: {
				"ExpertId": record.getData().ExpertId,
			},
			success: function(response) {
				var ResponseObject = eval("(" + response.responseText + ")");
				var Data = ResponseObject["0"];
				Ext.getCmp("ExpertSkimNumBtn").setText("浏览：" + Data.ExpertSkimNum + " 次");
				var Content = "<div style = \"background : #FFFFFF; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;\">";
				if (Data.ExpertName != "") {
					Content = Content + "<div class = ExpertDetailName>" + Data.ExpertName + "</div>" + "<HR width = 100% color = #FFFFFF size = 1 noShade>";
				};
				if (Data.ExpertTitle != "") {
					Content = Content + "<div class = ExpertDetailContent>" + "职称：" + Data.ExpertTitle + "</div>" + "<div style = \" height : 0.25em \" ></div>";
				};
				if (Data.ExpertPosition != "") {
					Content = Content + "<div class = ExpertDetailContent>" + "职位：" + Data.ExpertPosition + "</div>" + "<div style = \" height : 0.25em \" ></div>";
				};
				if (Data.ExpertPhone != "") {
					Content = Content + "<div class = ExpertDetailContent>" + "电话号码：" + "<a href = \"tel:" + Data.ExpertPhone + "\">" + Data.ExpertPhone + "</a>" + "</div>" + "<div style = \" height : 0.25em \" ></div>";
				};
				if (Data.ExpertContent != "") {
					Content = Content + "<div class = ExpertDetailContent>" + "详细内容：" + Data.ExpertContent + "</div>" + "<div style = \" height : 0.25em \" ></div>";
				};
				if (Data.ExpertImageUrl != "") {
					var ExpertImageUrl = Data.ExpertImageUrl.split(";")
					for (i = 0; i < ExpertImageUrl.length; i++) {
						Content = Content + "<img class = ExpertDetailImage src = " + ExpertImageUrl[i] + " />" + "<div style = \" height : 0.25em \" ></div>";
					};
				};
				Ext.getCmp("ExpertDetailMain").setHtml(Content + "</div>" + "<div style = \" height : 0.25em \" ></div>");
			},
		});
	},
});