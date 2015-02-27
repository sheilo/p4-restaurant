
var time = new Date();

var current = {
  hour: time.getUTCHours(),
  minute: time.getUTCMinutes(),
  check: time.getUTCHours() + ":" + time.getUTCMinutes()
  hours: ['11:00', '9/23', '10/1', '1/11', '12/24', '7/7']
};

var currenttime = current.check;
console.log(currenttime);

//if ( > current.check > ) {
//	$('body').removeClass('open');
//	$('body').addClass('close');
//}