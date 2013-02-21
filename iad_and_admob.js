Titanium.Admob = require('ti.admob');
var admobview = Titanium.Admob.createView({
	top : 366,
	left : 0,
	right : 0,
	width : 320,
	height : 50,
	//		testing:true,
	adBackgroundColor : 'black',
	primaryTextColor : 'blue',
	secondaryTextColor : 'green',
	publisherId : 'publisherId'
});

admobview.hide();
myWindow.add(admobview);
wait_timeout = setTimeout(function(){
   admobview.show();
},5000); //5 seccond

var adview = Titanium.UI.iOS.createAdView();
adview.top = 366;
adview.width = 'auto';
adview.height = 50;
adview.zIndex = 9;
adview.opacity = 1;

adview.addEventListener('load', function(e) {
	clearTimeout(wait_timeout);
	adview.show();
});

adview.addEventListener('error', function(e) {
	admobview.show();
});

adview.hide();
myWindow.add(adview);