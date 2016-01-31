$(document).ready(function(){
	console.log("test");
	$(".butts").hover(makeBigger, returnToOriginalSize);
		function makeBigger(){
		$(this).css({height: '+=40%', width: '+=40%'});
	}
	function returnToOriginalSize(){
		$(this).css({height:"", width: ""});
	}
		
});