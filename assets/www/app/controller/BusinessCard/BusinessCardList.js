Ext.define("Project.controller.BusinessCard.BusinessCardList", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			BusinessCardListMain: "#BusinessCardListMain",
		},
		control: {
			BusinessCardListMain: {
				itemtap: "OnBusinessCardListMainItemtap",
			},
		},
	},
	OnBusinessCardListMainItemtap: function(list, index, target, record, e, eOpts) {
		SwitchToNext("BusinessCardDetail");
		Ext.Ajax.request({
			url: ServerUrl + "GetBusinessCardDetail.jsp",
			params: {
				"BusinessCardID": record.getData().BusinessCardID,
			},
			success: function(response) {
				var ResponseObject = eval("(" + response.responseText + ")");
				var Data = ResponseObject["0"];
				var Content = "<div style = 'background : #FFFFFF; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;'>";
				if (Data.BusinessCardName != "") {
					Content = Content + "<div class = BusinessCardDetailName>" + Data.BusinessCardName + "</div>" + "<HR width = 100% color = #FFFFFF size = 1 noShade>";
				};
				if (Data.BusinessCardContacter != "") {
					Content = Content + "<div class = BusinessCardDetailContent>" + "联系人：" + Data.BusinessCardContacter + "</div>" + "<div style = 'height : 0.25em'></div>";
				};
				if (Data.BusinessCardContactMethod != "") {
					Content = Content + "<div class = BusinessCardDetailContent>" + "联系方式：" + Data.BusinessCardContactMethod + "</div>" + "<div style = 'height : 0.25em'></div>";
				};
				if (Data.BusinessCardMainBusiness != "") {
					Content = Content + "<div class = BusinessCardDetailContent>" + "主要业务：" + Data.BusinessCardMainBusiness + "</div>" + "<div style = 'height : 0.25em'></div>";
				};
				if (Data.BusinessCardSlogan != "") {
					Content = Content + "<div class = BusinessCardDetailContent>" + "宣传口号：" + Data.BusinessCardSlogan + "</div>" + "<div style = 'height : 0.25em'></div>";
				};
				if (Data.BusinessCardIntroduction != "") {
					Content = Content + "<div class = BusinessCardDetailContent>" + "企业介绍：" + Data.BusinessCardIntroduction + "</div>" + "<div style = 'height : 0.25em'></div>";
				};
				if (Data.BusinessCardImageUrl != "") {
					var BusinessCardImageUrl = Data.BusinessCardImageUrl.split(";")
					for (i = 0; i < BusinessCardImageUrl.length; i++) {
						Content = Content + "<img class = BusinessCardDetailImage src = " + BusinessCardImageUrl[i] + " />" + "<div style = 'height : 0.25em'></div>";
					};
				};
				Ext.getCmp("BusinessCardDetailMain").setHtml(Content + "</div>" + "<div style = 'height : 0.25em'></div>");
			},
		});
	},
});