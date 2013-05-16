Ext.define("Project.controller.CategoryView.ChildCategory", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			ChildCategoryMain: "#ChildCategoryMain",
		},
		control: {
			ChildCategoryMain: {
				itemtap: "OnChildCategoryMainItemtap"
			},
		},
	},
	OnChildCategoryMainItemtap: function(list, index, target, record, e, eOpts) {
		var Data = record.getData();
		if (Data.CategoryType == "ParentCategory") {
			SwitchToNext("ChildCategory");
			Ext.getCmp("ChildCategoryTop").setTitle(Data.CategoryName);
			StoreLoad(Ext.getCmp("ChildCategoryMain").getStore(), 1, {
				"ParentId": Data.CategoryId,
			});
		} else if (Data.CategoryType == "NewsCategory") {
			SwitchToNext("NewsList");
			Ext.getCmp("NewsListTop").setTitle(Data.CategoryName);
			StoreLoad(Ext.getCmp("NewsListMain").getStore(), 1, {
				"CategoryId": Data.CategoryId,
			});
		} else if (Data.CategoryType == "SnBCategory") {
			SwitchToNext("SnBList");
			Ext.getCmp("SnBListTop").setTitle(Data.CategoryName);
			StoreLoad(Ext.getCmp("SnBListMain").getStore(), 1, {
				"CategoryId": Data.CategoryId,
			});
		} else if (Data.CategoryType == "QnACategory") {
			SwitchToNext("QnAList");
			Ext.getCmp("QnAListTop").setTitle(Data.CategoryName);
			StoreLoad(Ext.getCmp("QnAListMain").getStore(), 1, {
				"CategoryId": Data.CategoryId,
			});
		} else if (Data.CategoryType == "ExpertCategory") {
			SwitchToNext("ExpertList");
			Ext.getCmp("ExpertListTop").setTitle(Data.CategoryName);
			StoreLoad(Ext.getCmp("ExpertListMain").getStore(), 1, {
				"CategoryId": Data.CategoryId,
			});
		} else if (Data.CategoryType == "BusinessCard") {
			SwitchToNext("BusinessCardList");
			Ext.getCmp("BusinessCardListTop").setTitle(Data.CategoryName);
			StoreLoad(Ext.getCmp("BusinessCardListMain").getStore(), 1, {
				"CategoryId": Data.CategoryId,
			});
		} else if (Data.CategoryType == "PostSnB") {
			SwitchToNext("PostSnB");
			var Values = Ext.getCmp("PostSnBMain").getValues();
			for (var Key in Values) {
				Values[Key] = "";
			};
			Ext.getCmp("PostSnBMain").setValues(Values);
			Ext.getCmp("PostSnBTop").setTitle(Data.CategoryName);
			Ext.getCmp("SnBCategoryId").setValue(Data.CategoryId);
		} else if (Data.CategoryType == "PostQnA") {
			SwitchToNext("PostQnA");
			var Values = Ext.getCmp("PostQnAMain").getValues();
			for (var Key in Values) {
				Values[Key] = "";
			};
			Ext.getCmp("PostQnAMain").setValues(Values);
			Ext.getCmp("PostQnATop").setTitle(Data.CategoryName);
			Ext.getCmp("QnACategoryId").setValue(Data.CategoryId);
		} else if (Data.CategoryType == "AgriWeather") {
			SwitchToNext("AgriWeather");
			Ext.getCmp("AgriWeatherTop").setTitle(Data.CategoryName);
			var Content = "<div style = 'background : #FFFFFF; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;'>";
			if (DB.AgriWeather.WeatherThis != "") {
				Content = Content + "<div class = AgriWeatherTitle>今日气象</div>" + "<HR width = 100% color = #FFFFFF size = 1 noShade>";
			};
			if (DB.AgriWeather.WeatherIconThis != "") {
				Content = Content + "<img class = AgriWeatherImage src = " + DB.AgriWeather.WeatherIconThis + " />" + "<div style = 'height : 0.25em'></div>";
			};
			if (DB.AgriWeather.WeatherThis != "") {
				Content = Content + "<div class = AgriWeatherContent>" + "天气：" + DB.AgriWeather.WeatherThis + "</div>" + "<div style = 'height : 0.25em'></div>";
			};
			if (DB.AgriWeather.TempThis != "") {
				Content = Content + "<div class = AgriWeatherContent>" + "气温：" + DB.AgriWeather.TempThis + "</div>" + "<div style = 'height : 0.25em'></div>";
			};
			if (DB.AgriWeather.WindThis != "") {
				Content = Content + "<div class = AgriWeatherContent>" + "风向：" + DB.AgriWeather.WindThis + "</div>" + "<div style = 'height : 0.25em'></div>";
			};
			if (DB.AgriWeather.WindLevelThis != "") {
				Content = Content + "<div class = AgriWeatherContent>" + "风力：" + DB.AgriWeather.WindLevelThis + "</div>" + "<div style = 'height : 0.25em'></div>";
			};
			Content = Content + "</div>" + "<div style = 'height : 0.25em'></div>";

			Content = Content + "<div style = 'background : #FFFFFF; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;'>";
			if (DB.AgriWeather.WeatherNext != "") {
				Content = Content + "<div class = AgriWeatherTitle>明日气象</div>" + "<HR width = 100% color = #FFFFFF size = 1 noShade>";
			};
			if (DB.AgriWeather.WeatherIconNext != "") {
				Content = Content + "<img class = AgriWeatherImage src = " + DB.AgriWeather.WeatherIconNext + " />" + "<div style = 'height : 0.25em'></div>";
			};
			if (DB.AgriWeather.WeatherNext != "") {
				Content = Content + "<div class = AgriWeatherContent>" + "天气：" + DB.AgriWeather.WeatherNext + "</div>" + "<div style = 'height : 0.25em'></div>";
			};
			if (DB.AgriWeather.TempNext != "") {
				Content = Content + "<div class = AgriWeatherContent>" + "气温：" + DB.AgriWeather.TempNext + "</div>" + "<div style = 'height : 0.25em'></div>";
			};
			if (DB.AgriWeather.WindNext != "") {
				Content = Content + "<div class = AgriWeatherContent>" + "风向：" + DB.AgriWeather.WindNext + "</div>" + "<div style = 'height : 0.25em'></div>";
			};
			if (DB.AgriWeather.WindLevelNext != "") {
				Content = Content + "<div class = AgriWeatherContent>" + "风力：" + DB.AgriWeather.WindLevelNext + "</div>" + "<div style = 'height : 0.25em'></div>";
			};
			Content = Content + "</div>" + "<div style = 'height : 0.25em'></div>";

			Content = Content + "<div style = 'background : #FFFFFF; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;'>";
			if (DB.AgriWeather.WeatherThir != "") {
				Content = Content + "<div class = AgriWeatherTitle>后日气象</div>" + "<HR width = 100% color = #FFFFFF size = 1 noShade>";
			};
			if (DB.AgriWeather.WeatherIconThir != "") {
				Content = Content + "<img class = AgriWeatherImage src = " + DB.AgriWeather.WeatherIconThir + " />" + "<div style = 'height : 0.25em'></div>";
			};
			if (DB.AgriWeather.WeatherThir != "") {
				Content = Content + "<div class = AgriWeatherContent>" + "天气：" + DB.AgriWeather.WeatherThir + "</div>" + "<div style = 'height : 0.25em'></div>";
			};
			if (DB.AgriWeather.TempThir != "") {
				Content = Content + "<div class = AgriWeatherContent>" + "气温：" + DB.AgriWeather.TempThir + "</div>" + "<div style = 'height : 0.25em'></div>";
			};
			if (DB.AgriWeather.WindThir != "") {
				Content = Content + "<div class = AgriWeatherContent>" + "风向：" + DB.AgriWeather.WindNext + "</div>" + "<div style = 'height : 0.25em'></div>";
			};
			if (DB.AgriWeather.WindLevelThir != "") {
				Content = Content + "<div class = AgriWeatherContent>" + "风力：" + DB.AgriWeather.WindLevelThir + "</div>" + "<div style = 'height : 0.25em'></div>";
			};
			Ext.getCmp("AgriWeatherMain").setHtml(Content + "</div>" + "<div style = 'height : 0.25em'></div>");
		};
	},
});