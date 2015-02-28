
var time = new Date();

var current = {
  day: time.getUTCDay(),
  hour: time.getHours(),
  minute: time.getUTCMinutes(),
  check: time.getHours() + ":" + time.getUTCMinutes()
};

var currenttime = current.check;
console.log(currenttime);

var currentday = current.day;
console.log(currentday);

if (((current.day == 1) || (current.day == 2) || (current.day == 3) || (current.day == 4)) && (("11:0" < current.check < "14:30") || ("17:0" < current.check < "21:30"))) {
	$("p").remove(".close");
	$("p").add(".open");
} else if (((current.day == 5) || (current.day == 6)) && ("11:0" < current.check < "22:0")) {
	$("p").remove(".close");
	$("p").add(".open");
} else if ((current.day == 0) && ("12:0" < current.check < "21:0")) {
	$("p").remove(".close");
	$("p").add(".open");
} else {
	$("p").remove(".open");
	$("p").add(".close");
}