import './index.scss';

window.$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});