
var time = new Date();

var current = {
  hour: time.getUTCHours(),
  minute: time.getUTCMinutes(),
  check: time.getUTCHours() + ":" + time.getUTCMinutes(), 
  user: ['4/6', '9/23', '10/1', '1/11', '12/24', '7/7']
};

var currenttime = current.check;
console.log(currenttime);

//if ( birthday.user[3] == '1/11') {
//	$('body').removeClass('open');
//	$('body').addClass('close');
//}