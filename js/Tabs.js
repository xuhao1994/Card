$(function () {
	$('.body section article:first-child').siblings().hide();
    $('.body>nav>div').click(function () {
        $(this).addClass('div_action').siblings().removeClass('div_action');
        $('.body section article:eq(' + $(this).index() + ')').show().siblings().hide();
    });
});