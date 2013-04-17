Ext.define("Project.controller.HomeView.HomeView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	SetGrid : function (Data, Carousel) {
		var i = 0;
		var j = 0;
		var k = 0;
		var vContainer = "";
		var hContainer = "";
		for (i = 0; i < 3; i++) {
			if (i == 0 && j == 0) {
				vContainer = Ext.create("Ext.Container", {
						layout : "vbox",
					});
			};
			hContainer = Ext.create("Ext.Container", {
					layout : "hbox",
				});
			for (j = 0; j < 3; j++) {
				hContainer.add(Ext.create("Ext.Spacer"));
				if (Data[k] && Data[k]["CategoryId"]) {
					var Item = Ext.create("Ext.Container", {
							Data : Data[k],
							width : Ext.Viewport.getWindowWidth() * 0.3,
							height : Ext.Viewport.getWindowWidth() * 0.3,
							html : "<img class = HomeViewIcon src = " + Data[k]["CategoryIconUrl"] + " />",
							listeners : {
								tap : {
									fn : function () {
										var Data = this.config.Data;
										if (Data.CategoryType == "ParentCategory") {
											SwitchToNext("ChildCategory");
											Ext.getCmp("ChildCategoryTop").setTitle(Data.CategoryName);
											StoreLoad(Ext.getCmp("ChildCategoryMain").getStore(), 1, {
												"ParentId" : Data.CategoryId,
											});
										} else if (Data.CategoryType == "NewsCategory") {
											SwitchToNext("NewsList");
											Ext.getCmp("NewsListTop").setTitle(Data.CategoryName);
											StoreLoad(Ext.getCmp("NewsListMain").getStore(), 1, {
												"CategoryId" : Data.CategoryId,
											});
										} else if (Data.CategoryType == "SnBCategory") {
											SwitchToNext("SnBList");
											Ext.getCmp("SnBListTop").setTitle(Data.CategoryName);
											StoreLoad(Ext.getCmp("SnBListMain").getStore(), 1, {
												"CategoryId" : Data.CategoryId,
											});
										} else if (Data.CategoryType == "PostSnB") {
											SwitchToNext("PostSnB");
											var Items = Ext.getCmp("PostSnBMain").getItems();
											for (var Key in Items.items) {
												Items.getAt(Key).setValue("");
											};
											Ext.getCmp("PostSnBTop").setTitle(Data.CategoryName);
											Ext.getCmp("SnBCategoryId").setValue(Data.CategoryId);
										} else if (Data.CategoryType == "QnACategory") {
											SwitchToNext("QnAList");
											Ext.getCmp("QnAListTop").setTitle(Data.CategoryName);
											StoreLoad(Ext.getCmp("QnAListMain").getStore(), 1, {
												"CategoryId" : Data.CategoryId,
											});
										} else if (Data.CategoryType == "PostQnA") {
											SwitchToNext("PostQnA");
											var Items = Ext.getCmp("PostQnAMain").getItems();
											for (var Key in Items.items) {
												Items.getAt(Key).setValue("");
											};
											Ext.getCmp("PostQnATop").setTitle(Data.CategoryName);
											Ext.getCmp("QnACategoryId").setValue(Data.CategoryId);
										} else if (Data.CategoryType == "ExpertCategory") {
											SwitchToNext("ExpertList");
											Ext.getCmp("ExpertListTop").setTitle(Data.CategoryName);
											StoreLoad(Ext.getCmp("ExpertListMain").getStore(), 1, {
												"CategoryId" : Data.CategoryId,
											});
										};
									},
									element : "element",
								},
							},
						});
					hContainer.add(Item);
				} else if (Data[k] && Data[k]["AppId"]) {
					var Item = Ext.create("Ext.Container", {
							Data : Data[k],
							width : Ext.Viewport.getWindowWidth() * 0.3,
							height : Ext.Viewport.getWindowWidth() * 0.3,
							html : "<img class = HomeViewIcon src = " + Data[k]["AppIconUrl"] + " />",
							listeners : {
								tap : {
									fn : function () {
										var Data = this.config.Data;
										SwitchToNext("RootCategory");
										Ext.getCmp("RootCategoryTop").setTitle(Data.AppLocation + " • " + Data.AppName);
										StoreLoad(Ext.getCmp("RootCategoryMain").getStore(), 1, {
											"AppId" : Data.AppId,
										});
									},
									element : "element",
								},
							},
						});
					hContainer.add(Item);
				} else {
					hContainer.add(Ext.create("Ext.Container", {
							width : Ext.Viewport.getWindowWidth() * 0.3,
							height : Ext.Viewport.getWindowWidth() * 0.3,
							html : "<img class = HomeViewIcon src = resources/image/NoIcon.png />",
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
	launch : function () {
		var THIS = this;
		GetOrderApp();
		GetDefaultApp();
		GetDefaultCategory();
		var handle = setInterval(function () {
				if (DB.OrderAppLoaded && DB.DefaultAppLoaded && DB.DefaultCategoryLoaded) {
					window.plugins.IMSI.GetIMSI(function (IMSI) {
						Ext.Ajax.request({
							url : ServerUrl + "PostAppUser.jsp",
							params : {
								"IMSI" : IMSI,
								"AppId" : DB.DefaultApp["0"]["AppId"],
							},
						});
					}, function (Error) {
						console.log(Error);
					});
					Ext.getCmp("HomeViewTop").setTitle(DB.DefaultApp["0"]["AppLocation"] + " • " + DB.DefaultApp["0"]["AppName"]);
					THIS.SetGrid(DB.DefaultCategory.concat(DB.OrderApp), Ext.getCmp("HomeViewMain"));

					clearInterval(handle);
				};
			}, 50);
	},
});
