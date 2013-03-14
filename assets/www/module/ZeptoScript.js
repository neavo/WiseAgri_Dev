{
	function SetScreenResolution() {
		ScreenWidth = document.body.clientWidth;
		ScreenHeight = document.body.clientHeight;
	};

	$(document).ready(function () {
		$(".NewsListIcon").css("max-width", DB.ScreenWidth * 0.164 * 0.8 + "px");
	});
}
