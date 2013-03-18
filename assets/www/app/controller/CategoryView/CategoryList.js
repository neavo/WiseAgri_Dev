Ext.define("Project.controller.CategoryView.CategoryList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			CategoryListMain : "#CategoryListMain",
		},
		control : {
			CategoryListMain : {
				itemtap : "OnCategoryListMainItemtap"
			},
		},
	},
	OnCategoryListMainItemtap : function (list, index, target, record, e, eOpts) {
		var Data = record.getData();
		if (Data.CategoryType == "ParentCategory") {
			SwitchToNext("CategoryList");
			Ext.getCmp("CategoryListTop").setTitle(Data.CategoryName);
			StoreLoad(Ext.getCmp("CategoryListMain").getStore(), 1, {
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
		} else if (Data.CategoryType == "ExpertCategory") {
			SwitchToNext("ExpertList");
			Ext.getCmp("ExpertListTop").setTitle(Data.CategoryName);
			StoreLoad(Ext.getCmp("ExpertListMain").getStore(), 1, {
				"CategoryId" : Data.CategoryId,
			});
		};
	},
});
