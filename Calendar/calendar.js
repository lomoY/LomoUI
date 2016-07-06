var weekdays = new Array();
weekdays[0] = 'sunday',
    weekdays[1] = 'monday',
    weekdays[2] = 'tuesday',
    weekdays[3] = 'wensday',
    weekdays[4] = 'thursday',
    weekdays[5] = 'friday',
    weekdays[6] = 'saturday';

var now = new Date();
nowYear = now.getFullYear(),
    nowMonth = now.getMonth() + 1,
    lastMonth = nowMonth - 1,
    nextMonth = nowMonth + 1;

var nowDayCount = getDayCount(nowYear, nowMonth),
    lastDayCount = getDayCount(nowYear, lastMonth),
    nextDayCount = getDayCount(nowYear, nextMonth);
var monthFirstWeekDay = getFirstWeekDay(nowYear, nowMonth);
var calendarBody = document.getElementById('calendarBody');
var firstTr = calendarBody.getElementsByTagName('tr')[0];

function init() {

    //children和childNodes的区别:
    //Element继承了Node类 
    //children是element的属性
    //childNodes是Node的属性
    //Element的children[0]仍为Element，是Node和Element的实例，Node的childNdoes[0]为Node，只是Node的实例，不是Element的实例

    initSelect();
    drawCalendar();
    addEvent();
};

// 日历初始化
function drawCalendar() {

    var selectedYear = document.getElementById('year'),
        selectedMonth = document.getElementById('month');
    var selectedYearVal = selectedYear.value,
        selectedMonthVal = selectedMonth.value;
    var now = new Date(selectedYearVal, selectedMonthVal);
    nowYear = now.getFullYear(),
        nowMonth = now.getMonth(),
        lastMonth = nowMonth - 1,
        nextMonth = nowMonth + 1;
    console.log(nowYear + ',' + nowMonth);
    var nowDayCount = getDayCount(nowYear, nowMonth),
        lastDayCount = getDayCount(nowYear, lastMonth),
        nextDayCount = getDayCount(nowYear, nextMonth);
    var monthFirstWeekDay = getFirstWeekDay(nowYear, nowMonth);
    var calendarBody = document.getElementById('calendarBody');
    var firstTr = calendarBody.getElementsByTagName('tr')[0];
    var i = 1;

    // 7列5行
    for (var r = 0; r < 6; r++) {
        var curTr = calendarBody.getElementsByTagName('tr')[r];

        if (r == 0) {
            var lastMonthBegin = lastDayCount - monthFirstWeekDay + 1;
            for (var c = 0; c < 7; c++) {
                var curTd = curTr.children[c];
                if (c < monthFirstWeekDay) {
                    curTd.innerHTML = lastMonthBegin;
                    lastMonthBegin++;
                } else {
                    curTd.innerHTML = i
                    i++;
                }
            }

        } else if (r > 0) {
            var curTd;
            for (var c = 0; c < 7; c++) {

                if (i <= nowDayCount) {
                    curTd = curTr.children[c];
                    curTd.innerHTML = i;
                    i++;
                } else {
                    if (i = nowDayCount) i = 1;
                    curTd = curTr.children[c];
                    curTd.innerHTML = i;
                    i++
                };
            }
        }
    }
}

// 返回指定年、月的天数
function getDayCount(year, month) {
    var monthLastday = new Date(year, month, 0);
    var dayCount = monthLastday.getDate();
    return dayCount;
};

// 返回指定年、月的第一天
function getFirstWeekDay(year, month) {
    var monthFirstday = new Date(year, month - 1, 1);
    var firstWeekDay = monthFirstday.getDay();
    return firstWeekDay;
};

// 初始化年份选择工具
function initSelect(year, month) {
    var selectYear = document.getElementById('year'),
        selectMonth = document.getElementById('month'),
        startYear = 1970;
    endYear = nowYear + 50;
    for (var i = 1970; i < endYear; i++) {
        var optionYear = document.createElement('option');
        optionYear.appendChild(document.createTextNode(i));
        selectYear.appendChild(optionYear);
    }
};

// 事件绑定
function addEvent() {
    var selectedYear = document.getElementById('year'),
        selectedMonth = document.getElementById('month');
    var selectedYearVal = selectedYear.value,
        selectedMonthVal = selectedMonth.value;
    selectedYear.onchange = timeChange;
    selectedMonth.onchange = timeChange;

    function timeChange() {
        var selectedYearVal = selectedYear.value,
            selectedMonthVal = selectedMonth.value;
        drawCalendar(selectedYearVal, selectedMonthVal);
    }
}

window.onload = init();
