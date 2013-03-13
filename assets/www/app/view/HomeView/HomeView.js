Ext.define("Project.view.HomeView.HomeView", {
	extend : "Ext.Container",
	xtype : "HomeView",
	config : {
		layout : "vbox",
		style : "background : white;",
		items : [{
				id : "HomeViewTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
				title : "智 慧 农 业 • 湖 北",
			}, {
				id : "HomeViewMain",
				xtype : "container",
				flex : 1,
				layout : "vbox",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "container",
						layout : "hbox",
						items : [{
								xtype : "spacer",
							}, {
								xtype : "container",
								width : Ext.Viewport.getWindowWidth() * 0.3333,
								height : Ext.Viewport.getWindowWidth() * 0.3333,
								html : "<img class = HomeViewIcon src = data/Icon/01.png />",
							}, {
								xtype : "spacer",
							}, {
								xtype : "container",
								width : Ext.Viewport.getWindowWidth() * 0.3333,
								height : Ext.Viewport.getWindowWidth() * 0.3333,
								html : "<img class = HomeViewIcon src = data/Icon/02.png />",
							}, {
								xtype : "spacer",
							}, {
								xtype : "container",
								width : Ext.Viewport.getWindowWidth() * 0.3333,
								height : Ext.Viewport.getWindowWidth() * 0.3333,
								html : "<img class = HomeViewIcon src = data/Icon/03.png />",
							}, {
								xtype : "spacer",
							},
						],
					}, {
						xtype : "spacer",
					}, {
						xtype : "container",
						layout : "hbox",
						items : [{
								xtype : "spacer",
							}, {
								xtype : "container",
								width : Ext.Viewport.getWindowWidth() * 0.3333,
								height : Ext.Viewport.getWindowWidth() * 0.3333,
								html : "<img class = HomeViewIcon src = data/Icon/04.png />",
							}, {
								xtype : "spacer",
							}, {
								xtype : "container",
								width : Ext.Viewport.getWindowWidth() * 0.3333,
								height : Ext.Viewport.getWindowWidth() * 0.3333,
								html : "<img class = HomeViewIcon src = data/Icon/05.png />",
							}, {
								xtype : "spacer",
							}, {
								xtype : "container",
								width : Ext.Viewport.getWindowWidth() * 0.3333,
								height : Ext.Viewport.getWindowWidth() * 0.3333,
								html : "<img class = HomeViewIcon src = data/Icon/06.png />",
							}, {
								xtype : "spacer",
							},
						],
					}, {
						xtype : "spacer",
					}, {
						xtype : "container",
						layout : "hbox",
						items : [{
								xtype : "spacer",
							}, {
								xtype : "container",
								width : Ext.Viewport.getWindowWidth() * 0.3333,
								height : Ext.Viewport.getWindowWidth() * 0.3333,
								html : "<img class = HomeViewIcon src = data/Icon/03.png />",
							}, {
								xtype : "spacer",
							}, {
								xtype : "container",
								width : Ext.Viewport.getWindowWidth() * 0.3333,
								height : Ext.Viewport.getWindowWidth() * 0.3333,
								html : "<img class = HomeViewIcon src = data/Icon/01.png />",
							}, {
								xtype : "spacer",
							}, {
								xtype : "container",
								width : Ext.Viewport.getWindowWidth() * 0.3333,
								height : Ext.Viewport.getWindowWidth() * 0.3333,
								html : "<img class = HomeViewIcon src = resources/icons/noIcon.png />",
							}, {
								xtype : "spacer",
							},
						],
					}, {
						xtype : "spacer",
					},
				],
			}, {
				id : "HomeViewBottom",
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "BottomBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "BackBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
