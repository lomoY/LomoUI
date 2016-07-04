var weekdays = new Array();
weekdays[0] = 'sunday',
    weekdays[1] = 'monday',
    weekdays[2] = 'tuesday',
    weekdays[3] = 'wensday',
    weekdays[4] = 'thursday',
    weekdays[5] = 'friday',
    weekdays[6] = 'saturday';

var now = new Date();
var nowWeekday = now.getDay();
var calendarBody = document.getElementById('calendarBody');
var firstTr = calendarBody.getElementsByTagName('tr')[0];

function init() {
	// children和childNodes的区别
	var firstTd = firstTr.children[nowWeekday];
	firstTd.innerHTML=//本月第一天

};


window.onload = init();
