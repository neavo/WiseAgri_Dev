Ext.define("Project.controller.HomeView.HomeView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	SetGrid : function (data, container) {
		var i = 0;
		var j = 0;
		var k = 0;
		var HContainer = "";
		for (i = 0; i < 3; i++) {
			container.add(Ext.create("Ext.Spacer"));
			HContainer = Ext.create("Ext.Container", {
					layout : "hbox",
				});
			for (j = 0; j < 3; j++) {
				HContainer.add(Ext.create("Ext.Spacer"));
				if (data[k] && data[k]["CategoryIconUrl"]) {
					HContainer.add(Ext.create("Ext.Container", {
							width : DB.ScreenWidth * 0.275,
							height : DB.ScreenWidth * 0.275,
							html : "<img class = HomeViewIcon src = " + data[k]["CategoryIconUrl"] + " />",
							listeners : {
								tap : {
									fn : function () {
										SwitchToNext("NewsList");
										StoreLoad(Ext.getCmp("NewsListMain").getStore(), 1);
									},
									element : "element",
								},
							},
						}));
				} else {
					HContainer.add(Ext.create("Ext.Container", {
							width : DB.ScreenWidth * 0.275,
							height : DB.ScreenWidth * 0.275,
							html : "<img class = HomeViewIcon src = resources/image/NoIcon.png />",
						}));
				};
				k = k + 1;
			};
			HContainer.add(Ext.create("Ext.Spacer"));
			container.add(HContainer);
		};
		container.add(Ext.create("Ext.Spacer"));
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
