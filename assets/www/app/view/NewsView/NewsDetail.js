Ext.define("Project.view.NewsView.NewsDetail", {
	extend : "Ext.Container",
	xtype : "NewsDetail",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "toolbar",
				docked : "top",
				baseCls : "ToolBar",
				title : "详细信息",
			}, {
				id : "NewsDetailMain",
				xtype : "container",
				scrollable : "vertical",
				html : "</div>"
				 + "<div style = \"background : #FFFFFF; margin-top : 0.25em; -webkit-border-radius : 0.25em; border : 1px solid #808080;\">"
				 + "<div class = NewsDetailTitle>Google Android 百科</div>"
				 + "<div class = NewsDetailDataTime>2012-12-12　来源：百度百科</div>"
				 + "<HR width = 100% color = #FFFFFF size = 1 noShade>"
				 + "<div class = NewsDetailContent>　　Android，中文称安卓，是一个以Linux为基础的半开放原始码作业系统，主要用于移动设备，由Google成立的Open Handset Alliance（OHA，开放手持设备联盟）持续领导与开发中。Android系统最初由安迪·鲁宾（Andy Rubin）开发制作，并于2005年8月被Google收购。2007年11月，Google与84家硬件制造商、软件开发商及电信营运商成立OHA来共同研发改良Android系统。随后，Google以Apache免费开源许可证的授权方式，发布了Android的源代码。让生产商推出搭载Android的智能手机，Android作业系统后来更逐渐拓展到平板电脑及其他领域上。</div>" + "<div>"
				 + "<div style = \" height : 0.25em \" ></div>"
				 + "<img class = NewsDetailImage src = data/Image/01.jpg />"
				 + "<div style = \" height : 0.25em \" ></div>"
				 + "<div class = NewsDetailContent>　　Android系统最初由安迪·鲁宾（Andy Rubin）开发制作，并于2005年8月被Google收购。2007年11月，Google与84家硬件制造商、软件开发商及电信营运商成立OHA来共同研发改良Android系统。随后，Google以Apache免费开源许可证的授权方式，发布了Android的源代码。让生产商推出搭载Android的智能手机，Android作业系统后来更逐渐拓展到平板电脑及其他领域上。</div>" + "<div>"
				 + "<div style = \" height : 0.25em \" ></div>"
				 + "<img class = NewsDetailImage src = data/Image/02.png />"
				 + "<div style = \" height : 0.25em \" ></div>"
				 + "<div class = NewsDetailContent>　　2012年7月美国科技博客网站评选出二十一世纪十款最重要电子产品，Android操作系统和iPhone等榜上有名。</div>" + "<div>"
				 + "</div>"
				 + "<div style = \" height : 0.25em \" ></div>",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "ToolBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "container",
						html : "浏览：18 次",
					}, {
						xtype : "spacer",
					}, {
						xtype : "container",
						html : "分享 ...",
						listeners : {
							tap : {
								fn : function () {
									window.plugins.share.show({
										subject : "",
										text : "来自“智慧农业”手机客户端的分享！",
									},
										function () {
										DoAlert("分享成功！");
									},
										function () {
										DoAlert("分享失败！");
									});
								},
								element : "element",
							},
						},
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
