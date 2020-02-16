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

});