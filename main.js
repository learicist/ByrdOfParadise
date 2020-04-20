$(document).ready(function () {

	let count, 
		result, 
		arr6 = [], 
		arr20 = [];
	
	$('#roll6').click(function(){
		count = 6;
		result = Math.ceil(Math.random() * count)
		//console.log("You rolled: " + result);
		arr6.push(result);
		$('#result6').html("You have rolled: " + arr6);
	});
	
	$('#roll20').click(function(){
		count = 20;
		result = Math.ceil(Math.random() * count)
		//console.log("You rolled: " + result);
		arr20.push(result);
		$('#result20').html("You have rolled: " + arr20);
	});

	$('#clear6').click(function () {
		arr6 = [];
		$('#result6').html('');
	});
	
	$('#clear20').click(function () {
		arr20 = [];
		$('#result20').html('');
	});
	
});