$(document).ready(function() {
	$(".banner").fadeIn("slow");
	$("main").fadeIn(2000);
});
window.onscroll = function(e) {
	var e = e || window.event;
	var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;

	if (scrolltop > 0 && scrolltop < 139) {
		$(".skills").fadeIn(2000);
	}
	if (scrolltop > 400) {
		$(".portfolio").fadeIn(2000);
	}
}
