{
	if (!navigator.userAgent.toLowerCase().match(/windows/i)) {
		var Style = document.createElement("style");
		Style.type = "text/css";
		Style.innerHTML = "html { font-size : " + window.devicePixelRatio * 100 + "% }";
		document.getElementsByTagName("HEAD").item(0).appendChild(Style);
	} else {
		var Style = document.createElement("style");
		Style.type = "text/css";
		Style.innerHTML = "html { font-size : 200% }";
		document.getElementsByTagName("HEAD").item(0).appendChild(Style);
	};
}