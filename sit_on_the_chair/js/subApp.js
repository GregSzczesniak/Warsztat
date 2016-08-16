document.addEventListener("DOMContentLoaded", function(){

	var li = document.getElementById('list-dropdown'),
		ul = document.getElementById('inside-list');

	li.addEventListener('mouseover', function(){
		ul.classList.add('dropdown');
		li.addEventListener('mouseout', function(){
			ul.classList.remove('dropdown');
		});
	});
});