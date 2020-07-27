$(document).ready(function () {

	let count, 
		result, 
		arr6 = [], 
		arr20 = [],
		chars = [$('#graceTurn'), $('#aditTurn'), $('#dyTurn'), $('#capTurn')];
	
	//die rolls
	$('#roll6').click(function(){
		count = 6;
		result = Math.ceil(Math.random() * count)
		//console.log("You rolled: " + result);
		arr6.push(' ' + result);
		$('#result6').html("You have rolled: " + arr6);
		$('#result6').removeClass('hidden');
	});
	
	$('#roll20').on('click', function (e){
		
		if (e.ctrlKey) {
			console.log('ctrl key worked');
			let temp = 0;
			while (temp < 5) {
				temp++;
				count = 20;
				result = Math.ceil(Math.random() * count);
				arr20.push(' ' + result);
			}
			$('#result20').html("You have rolled: " + arr20);
			$('#result20').removeClass('hidden');
			
			let sort = arr20.sort((a, b) => b - a);
			let largest = sort[0];
			console.log(largest);
			
			console.log(arr20.indexOf(largest));
			
			for (let i in arr20) {
				
				if (arr20[i] == largest[0]) {
					
				}
				//remove item from array after assigned
			}
			
			
			
		} else {
			
			count = 20;
			result = Math.ceil(Math.random() * count);
			arr20.push(' ' + result);
			$('#result20').html("You have rolled: " + arr20);
			$('#result20').removeClass('hidden');
		}
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
		} else if (this.id == 'pris') {
			$('#prisStats').toggleClass('hidden');
		} else if (this.id == 'rusty') {
			$('#rustyStats').toggleClass('hidden');
	});
	
	
	
});