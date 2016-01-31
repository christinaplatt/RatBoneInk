$(document).ready(function(){
	console.log("test");
	$(".butts").hover(makeBigger, returnToOriginalSize);
		function makeBigger(){
		$(this).css({height: '+=60%', width: '+=60%'});
	}
	function returnToOriginalSize(){
		$(this).css({height:"", width: ""});
	}
		
});