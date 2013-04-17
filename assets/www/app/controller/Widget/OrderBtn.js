Ext.define("Project.controller.Widget.OrderBtn", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			OrderBtn: "OrderBtn",
		},
		control: {
			OrderBtn: {
				tap: "OnOrderBtnTap",
			},
		},
	},
	SetGrid: function(Data, Carousel) {
		var i = 0;
		var j = 0;
		var k = 0;
		var vContainer = "";
		var hContainer = "";
		for (i = 0; i < 3; i++) {
			if (i == 0 && j == 0) {
				vContainer = Ext.create("Ext.Container", {
					layout: "vbox",
				});
			};
			hContainer = Ext.create("Ext.Container", {
				layout: "hbox",
			});
			for (j = 0; j < 3; j++) {
				hContainer.add(Ext.create("Ext.Spacer"));
				if (Data[k]) {
					var Ordered = false;
					var ItemHtml = "<img class = OrderViewIcon src = " + Data[k]["AppIconUrl"] + " />";
					for (var Value in DB.OrderApp) {
						if (Data[k]["AppId"] == DB.OrderApp[Value]["AppId"]) {
							Ordered = true;
							ItemHtml = "<img class = OrderViewIcon src = " + Data[k]["AppIconUrl"] + " />" + "<img style = \"" + " width : " + DB.ScreenWidth * 0.3 + "px;" + " height : " + DB.ScreenWidth * 0.3 + "px;" + " position : relative;" + " top : -" + DB.ScreenWidth * 0.315 + "px; \"" + " src = resources/image/Checked.png />";
						};
					};
					var Item = Ext.create("Ext.Container", {
						Data: Data[k],
						Ordered: Ordered,
						width: Ext.Viewport.getWindowWidth() * 0.3,
						height: Ext.Viewport.getWindowWidth() * 0.3,
						html: ItemHtml,
						DoOrder: function(Item, Data, Ordered) {
							if (Ordered) {
								Ext.Msg.confirm("", "是否取消订阅“" + Data.AppLocation + " • " + Data.AppName + "”？", function(Button, Value, ePpt) {
									if (Button == "yes") {
										for (var Key = 0; Key < DB.OrderApp.length; Key++) {
											var Value = DB.OrderApp[Key];
											if (Value.AppId == Data.AppId) {
												DB.OrderApp.splice(Key, 1);
											};
										};
										Item.setHtml("<img class = OrderViewIcon src = " + Data.AppIconUrl + " />");
									};
								});
								return false;
							} else {
								Ext.Msg.confirm("", "是否订阅“" + Data.AppLocation + " • " + Data.AppName + "”？", function(Button, Value, ePpt) {
									if (Button == "yes") {
										DB.OrderApp.push({
											"AppId": Data.AppId,
											"AppName": Data.AppName,
											"AppIconUrl": Data.AppIconUrl,
											"AppLocation": Data.AppLocation,
										});
										Item.setHtml("<img class = OrderViewIcon src = " + Data.AppIconUrl + " />" + "<img style = \"" + " width : " + DB.ScreenWidth * 0.3 + "px;" + " height : " + DB.ScreenWidth * 0.3 + "px;" + " position : relative;" + " top : -" + DB.ScreenWidth * 0.315 + "px; \"" + " src = resources/image/Checked.png />");
									};
								});
								return true;
							}
						},
						listeners: {
							tap: {
								fn: function() {
									this.config.Ordered = this.config.DoOrder(this, this.config.Data, this.config.Ordered);
								},
								element: "element",
							},
						},
					});
					hContainer.add(Item);
				} else {
					hContainer.add(Ext.create("Ext.Container", {
						width: Ext.Viewport.getWindowWidth() * 0.3,
						height: Ext.Viewport.getWindowWidth() * 0.3,
						html: "<img class = OrderViewIcon src = resources/image/NoIcon.png />",
					}));
				};
				k = k + 1;
			};
			hContainer.add(Ext.create("Ext.Spacer"));
			vContainer.add(Ext.create("Ext.Spacer"));
			vContainer.add(hContainer);
		};
		vContainer.add(Ext.create("Ext.Spacer"));
		Carousel.add(vContainer);
		if (Data[k] && Carousel.getItems().length < 9) {
			this.SetGrid(Data.slice(k), Carousel);
		};
	},
	OnOrderBtnTap: function() {
		var THIS = this;
		SwitchToNext("OrderView");
		Ext.getCmp("OrderViewMain").removeAll(true);
		Ext.Ajax.request({
			url: ServerUrl + "GetAppList.jsp",
			params: {
				"AppId": DB.DefaultApp["0"]["AppId"],
			},
			success: function(response) {
				var ResponseObject = eval("(" + response.responseText + ")");
				THIS.SetGrid(ResponseObject, Ext.getCmp("OrderViewMain"));
				Ext.getCmp("OrderViewMain").setActiveItem(0);
			},
		});
	},
});