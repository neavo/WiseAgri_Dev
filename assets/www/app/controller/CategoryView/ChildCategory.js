Ext.define("Project.controller.CategoryView.ChildCategory", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			ChildCategoryMain : "#ChildCategoryMain",
		},
		control : {
			ChildCategoryMain : {
				itemtap : "OnChildCategoryMainItemtap"
			},
		},
	},
	OnChildCategoryMainItemtap : function (list, index, target, record, e, eOpts) {
		var Data = record.getData();
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
		} else if (Data.CategoryType == "QnACategory") {
			SwitchToNext("QnAList");
			Ext.getCmp("QnAListTop").setTitle(Data.CategoryName);
			StoreLoad(Ext.getCmp("QnAListMain").getStore(), 1, {
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
