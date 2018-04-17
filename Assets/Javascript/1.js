function checkDriverAge(){
		var age = prompt("Your Age ??");
	if (Number(age) < 18){
		alert("Sorry, you are too young to drive this car. Powering off")
	}else if(Number(age) > 18){
		alert("Powering On. Enjoy the ride!")
	}else if(Number(age) === null){
		alert("Invalid Entry")
	}else{
		alert("Congratulations on your first year of driving. Enjoy the ride!")
		document.body.style.backgroundImage = "url('../Images/welcome2.jpg')";
	}
}