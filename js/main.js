window.addEventListener('DOMContentLoaded', function() {

	'use strict';

	let btnInfo = document.querySelectorAll('.info-header-tab'),
		infoHeader = document.querySelector('.info-header'),
		TabContent = document.querySelectorAll('.info-tabcontent');

	function HideTabContent (a) {
		for (let i = a; i < TabContent.length; i++) {
			TabContent[i].classList.remove('show');
			TabContent[i].classList.add('hide');
		}
	}
	
	HideTabContent(1);
	
	function ShowTAbContent (b) {
		if (TabContent[b].classList.contains('hide')) {
			TabContent[b].classList.remove('hide');
			TabContent[b].classList.add('show');
		}
	}

	infoHeader.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < btnInfo.length; i++) {
				if (target == btnInfo[i]) {
					HideTabContent(0);
					ShowTAbContent(i);
					break;
				}
			} 
		}
	});

	let deadLine = '2021-03-22';

	function getTimeRemaining(endTime) {
		let t = (Date.parse(endTime) - Date.parse(new Date())),
			seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000)/60 % 60),
			hours = Math.floor((t/(1000*60*60)));
		
		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}

	function setClock(id, endTime) {
		
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endTime);

			function addZero(num){
				if(num <= 9) {
					return '0' + num;
				} else {
					return num;
				}
			}
			
			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);
			
			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent ='00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
			
		}
	}

	setClock('timer', deadLine);


	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function () {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
});