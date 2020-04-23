$(document).ready(function () {

	let count, 
		result, 
		arr6 = [], 
		arr20 = [];
	
	//die rolls
	$('#roll6').click(function(){
		count = 6;
		result = Math.ceil(Math.random() * count)
		//console.log("You rolled: " + result);
		arr6.push(' ' + result);
		$('#result6').html("You have rolled: " + arr6);
		$('#result6').removeClass('hidden');
	});
	
	$('#roll20').click(function(){
		count = 20;
		result = Math.ceil(Math.random() * count)
		//console.log("You rolled: " + result);
		arr20.push(' ' + result);
		$('#result20').html("You have rolled: " + arr20);
		$('#result20').removeClass('hidden');
	});
	
	//clear buttons
	$('#clear6').click(function () {
		arr6 = [];
		$('#result6').html('');
		$('#result6').addClass('hidden');
	});
	
	$('#clear20').click(function () {
		arr20 = [];
		$('#result20').html('');
		$('#result20').addClass('hidden');
	});
	
	//toggleClass() 'hidden' for the cards
	$('.charNames').on('click', function (e) {
		e.preventDefault();
		
		if (this.id == 'grace') {
			$('#graceStats').toggleClass('hidden');
		} else if (this.id == 'adit') {
			$('#aditStats').toggleClass('hidden');
		} else if (this.id == 'dy') {
			$('#dyStats').toggleClass('hidden');
		} else if (this.id == 'cap') {
			$('#capStats').toggleClass('hidden');
		}
	});
	
	
	
});