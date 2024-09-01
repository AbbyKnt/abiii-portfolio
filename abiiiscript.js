/**********ABIIIKNT Darktheme**********/
let changetheme = document.querySelector("#ab_thememode").onclick = function(){
	document.body.classList.toggle("dark_theme");
	if(document.body.classList.contains("dark_theme")){
		document.querySelector("#ab_thememode").src = "svgsunfill.svg";
	}
	else{
		document.querySelector("#ab_thememode").src = "svgmoonfill.svg";
	}
}
/**********ABIIIKNT Schedule***********/
let daytab = document.querySelector("#ab_day");
let firstsub = document.querySelector("#ab_subfirst");
let firstsubtime = document.querySelector("#ab_subfirsttime");
let secondsub = document.querySelector("#ab_subsecond");
let secondsubtime = document.querySelector("#ab_subsecondtime");
let thirdsub = document.querySelector("#ab_subthird");
let thirdsubtime = document.querySelector("#ab_subthirdtime");
let fourthsub = document.querySelector("#ab_subfourth");
let fourthsubtime = document.querySelector("#ab_subfourthtime");
function changeDay(day, firstsub1, firstsubtime1, secondsub1, secondsubtime1, thirdsub1, thirdsubtime1, fourthsub1, fourthsubtime1){
	daytab.innerHTML = day;
	firstsub.innerHTML = firstsub1;
	firstsubtime.innerHTML = firstsubtime1;
	secondsub.innerHTML = secondsub1;
	secondsubtime.innerHTML = secondsubtime1;
	thirdsub.innerHTML = thirdsub1;
	thirdsubtime.innerHTML = thirdsubtime1;
	fourthsub.innerHTML = fourthsub1;
	fourthsubtime.innerHTML = fourthsubtime1;
}