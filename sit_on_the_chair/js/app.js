document.addEventListener("DOMContentLoaded", function(){

	var li = document.getElementById('list-dropdown'),
		ul = document.getElementById('inside-list'),
		chair_box1 = document.getElementById('chair-box1'),
		chair_box2 = document.getElementById('chair-box2'),
		white_back1 = document.getElementById('white-back1'),
		white_back2 = document.getElementById('white-back2'),
		slides = document.getElementsByClassName('slide-box'),
		arrPrev = document.getElementById('arrow1'),
		arrNext = document.getElementById('arrow2'),
		index = 0,
		downArrow1 = document.getElementById('downArrow1'),
		downArrow2 = document.getElementById('downArrow2'),
		downArrow3 = document.getElementById('downArrow3'),
		list_panel1 = document.getElementById('list_panel1'),
		list_panel2 = document.getElementById('list_panel2'),
		list_panel3 = document.getElementById('list_panel3'),
		li_panel1 = list_panel1.getElementsByTagName('li'),
		li_panel2 = list_panel2.getElementsByTagName('li'),
		li_panel3 = list_panel3.getElementsByTagName('li'),
		placeholder1 = document.getElementById('placeholder1'),
		placeholder2 = document.getElementById('placeholder2'),
		placeholder3 = document.getElementById('placeholder3'),
		dropdown_boxes = document.getElementsByClassName('drop_down_list'),
		list_panels = document.getElementsByClassName('list_panel'),
		chair = document.getElementById('your_chair'),
		chair_price = document.getElementById('chair_price'),
		fabric = document.getElementById('fabric'),
		fabric_price = document.getElementById('fabric_price'),
		transport_check = document.getElementById('transport_check'),
		transport = document.getElementById('transport'),
		transport_price = document.getElementById('transport_price'),
		calc = document.getElementById('calc'),
		sum1 = 0,
		sum2 = 0,
		sum3 = 0;

	/*Show submenu for first element of main list*/
	li.addEventListener('mouseover', function(){
		ul.classList.add('dropdown');
		li.addEventListener('mouseout', function(){
			ul.classList.remove('dropdown');
		});
	});

	/*Hide the name of chair*/
	chair_box1.addEventListener('mouseover', function(){
		white_back1.classList.add('hide');
		chair_box1.addEventListener('mouseout', function(){
			white_back1.classList.remove('hide');
		});
	});

	chair_box2.addEventListener('mouseover', function(){
		white_back2.classList.add('hide');
		chair_box2.addEventListener('mouseout', function(){
			white_back2.classList.remove('hide');
		});
	});

	/*Slider*/
	slides[0].classList.remove('hide');

	arrPrev.addEventListener('click', function(){
		slides[index].classList.add('hide');
		index--;
		if (index < 0) {
			index = slides.length - 1;
		}
		slides[index].classList.remove('hide');
	});

	arrNext.addEventListener('click', function(){
		slides[index].classList.add('hide');
		index++;
		if (index > slides.length - 1){
			index = 0;
		}
		slides[index].classList.remove('hide'); 
	});

	/*Select option*/
	function showList1(){
		list_panel1.classList.toggle('show');
		for (var i = 0; i < li_panel1.length; i++){
			li_panel1[i].addEventListener('click', function(){
				var choiceItem = this;
				var choice = this.innerText;
				placeholder1.innerText = choice;
				list_panel1.classList.remove('show');
				chair.innerText = choice;
				sum1 = parseInt(choiceItem.dataset.price);
				chair_price.innerText = choiceItem.dataset.price;
				calc.innerText = sum1 + sum2 + sum3;
			});
		} 
	}

	function showList2(){
		list_panel2.classList.toggle('show');
		for (var i = 0; i < li_panel2.length; i++){
			li_panel2[i].addEventListener('click', function(){
				var choice = this.innerText;
				placeholder2.innerText = choice;
				list_panel2.classList.remove('show');
			});
		}
	}

	function showList3(){
		list_panel3.classList.toggle('show');
		for (var i = 0; i < li_panel3.length; i++){
			li_panel3[i].addEventListener('click', function(){
				var choiceItem = this;
				var choice = this.innerText;
				placeholder3.innerText = choice;
				list_panel3.classList.remove('show');
				fabric.innerText = choice;
				sum2 = parseInt(choiceItem.dataset.price);
				fabric_price.innerText = choiceItem.dataset.price;
				calc.innerText = sum1 + sum2 + sum3;
			});
		}
	}
	/*Check the box*/
	function checkbox(){
		transport_check.classList.toggle('active');
	}

	downArrow1.addEventListener('click', function(){
		showList1();
	});

	downArrow2.addEventListener('click', function(){
		showList2();
	});

	downArrow3.addEventListener('click', function(){
		showList3();
	});

	transport_check.addEventListener('click', function(){
		checkbox();
		if (transport_check.className == "active") {
			transport.innerText = "Transport";
			transport_price.innerText = "50";
			sum3 = parseInt(transport_price.innerText);
		} else {
			transport.innerText = "";
			transport_price.innerText = "";
			sum3 = 0;
		}
		calc.innerText = sum1 + sum2 + sum3;
	});
	/*Hide toggled area if you click out of it*/
	window.onclick = function(event) {
  		if (!event.target.matches('.list_arrow')) {
	    	for (var i = 0; i < list_panels.length; i++) {
	      		var openDropdown = list_panels[i];
	      		if (openDropdown.classList.contains('show')) {
	        		openDropdown.classList.remove('show');
      			}
    		}
  		}
	}


});
