Ext.define("Project.view.AgriWeather.AgriWeather", {
	extend: "Ext.Container",
	xtype: "AgriWeather",
	config: {
		layout: "vbox",
		defaults: {
			flex: 1,
		},
		items: [{
			id: "AgriWeatherTop",
			xtype: "toolbar",
			docked: "top",
			baseCls: "ToolBar",
		}, {
			id: "AgriWeatherMain",
			xtype: "container",
			scrollable: "vertical",
		}, {
			xtype: "toolbar",
			docked: "bottom",
			baseCls: "ToolBar",
			items: [{
				xtype: "spacer",
			}, {
				xtype: "ShareBtn",
			}, {
				xtype: "spacer",
			}],
		}],
	},
});