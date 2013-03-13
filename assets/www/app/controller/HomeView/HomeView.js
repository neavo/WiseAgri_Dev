Ext.define("Project.controller.HomeView.HomeView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	SetGrid : function (data, container) {
		var ScreenWidth = Ext.Viewport.getWindowWidth();
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
				if (data[k]) {
					HContainer.add(Ext.create("Ext.Container", {
							width : ScreenWidth * 0.3333,
							height : ScreenWidth * 0.3333,
							html : "<img class = HomeViewIcon src = data/Icon/" + data[k] + ".png />",
						}));
				} else {
					HContainer.add(Ext.create("Ext.Container", {
							width : ScreenWidth * 0.3333,
							height : ScreenWidth * 0.3333,
							html : "<img class = HomeViewIcon src = resources/icons/noIcon.png />",
						}));
				};
				k = k + 1;
			};
			container.add(HContainer);
		};
		container.add(Ext.create("Ext.Spacer"));
	},
	launch : function () {
		var data = ["01", "02", "03", "04", "05", "06", "03", "01"];
		this.SetGrid(data, Ext.getCmp("HomeViewMain"));
	},
});
