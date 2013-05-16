Ext.define("Project.view.BusinessCard.BusinessCardList", {
	extend: "Ext.Container",
	xtype: "BusinessCardList",
	config: {
		layout: "vbox",
		defaults: {
			flex: 1,
		},
		items: [{
			id: "BusinessCardListTop",
			xtype: "toolbar",
			docked: "top",
			baseCls: "ToolBar",
		}, {
			id: "BusinessCardListMain",
			xtype: "list",
			store: "BusinessCardList",
			emptyText: "没有更多信息 ...",
			loadingText: "正在获取信息...",
			itemTpl: "<img class = BusinessCardIconUrl onerror = 'this.src = \'resources/image/DefaultIcon.png\'' src = {BusinessCardIconUrl} />"
				+ "<div class = BusinessCardName><b>{BusinessCardName}</b></div>"
				+ "<div class = BusinessCardMainBusiness>主要业务：{BusinessCardMainBusiness}</div>",
		}, {
			xtype: "toolbar",
			docked: "bottom",
			baseCls: "ToolBar",
			items: [{
				xtype: "spacer",
			}, {
				xtype: "PrevBtn",
			}, {
				xtype: "spacer",
			}, {
				xtype: "NextBtn",
			}, {
				xtype: "spacer",
			}, ],
		}, ],
	},
});