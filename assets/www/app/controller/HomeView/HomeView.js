Ext.define("Project.controller.HomeView.HomeView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	SetGrid : function (Data, Container) {
		var i = 0;
		var j = 0;
		var k = 0;
		var HContainer = "";
		for (i = 0; i < 3; i++) {
			Container.add(Ext.create("Ext.Spacer"));
			HContainer = Ext.create("Ext.Container", {
					layout : "hbox",
				});
			for (j = 0; j < 3; j++) {
				HContainer.add(Ext.create("Ext.Spacer"));
				if (Data[k]) {
					HContainer.add(Ext.create("Ext.Container", {
							Data : Data[k],
							width : DB.ScreenWidth * 0.3,
							height : DB.ScreenWidth * 0.3,
							html : "<img class = HomeViewIcon src = " + Data[k]["CategoryIconUrl"] + " />",
							listeners : {
								tap : {
									fn : function () {
										var Data = this.config.Data;
										if (Data.CategoryType == "NewsCategory") {
											SwitchToNext("NewsList");
											Ext.getCmp("NewsListTop").setTitle(Data.CategoryName);
											StoreLoad(Ext.getCmp("NewsListMain").getStore(), 1, {
												"CategoryId" : Data.CategoryId,
											});
										} else if (Data.CategoryType == "ParentCategory") {
											SwitchToNext("CategoryList");
											Ext.getCmp("CategoryListTop").setTitle(Data.CategoryName);
											StoreLoad(Ext.getCmp("CategoryListMain").getStore(), 1, {
												"ParentId" : Data.CategoryId,
											});
										};
									},
									element : "element",
								},
							},
						}));
				} else {
					HContainer.add(Ext.create("Ext.Container", {
							width : DB.ScreenWidth * 0.3,
							height : DB.ScreenWidth * 0.3,
							html : "<img class = HomeViewIcon src = resources/image/NoIcon.png />",
						}));
				};
				k = k + 1;
			};
			HContainer.add(Ext.create("Ext.Spacer"));
			Container.add(HContainer);
		};
		Container.add(Ext.create("Ext.Spacer"));
	},
	launch : function () {
		var THIS = this;
		var handle = setInterval(function () {
				if (DB.DefaultAppLoaded && DB.DefaultCategoryLoaded) {
					THIS.SetGrid(DB.DefaultCategory, Ext.getCmp("HomeViewMain"));
					clearInterval(handle);
				};
			}, 50);

	},
});
