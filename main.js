$(document).ready(function () {

	let count, result;
	
	$('#roll6').click(function(){
		count = 6;
		result = Math.ceil(Math.random() * count)
		console.log("You rolled: " + result);
		$('#result6').html(result)
	});
	
	$('#roll20').click(function(){
		count = 20;
		result = Math.ceil(Math.random() * count)
		console.log("You rolled: " + result);
		$('#result20').html(result)
	});

	
});