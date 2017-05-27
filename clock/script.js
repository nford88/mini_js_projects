function setDate(){
	//Grabs the date
	const now = new Date();

	//Query Selectors for the type of hands //
	const secondHand = document.querySelector('.second');
	const minuteHand = document.querySelector('.min');
	const hourHand = document.querySelector('.hour');
	
	//Seconds Hand 
	//(note the it moves to 90deg on the minute so that it
	// doesnt have to animate backwards from 450 to 90)
	const seconds = now.getSeconds();
	if (seconds == 00){
		secondHand.style.transform = `rotate(90deg)`;	
	}
	else {
		const secDegrees = ((seconds / 60) * 360) + 90;
		secondHand.style.transform = `rotate(${secDegrees}deg)`;
	}
	//Minute Hand
	const mins = now.getMinutes();
	const minDegrees = ((mins / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minDegrees}deg)`;
	// Hour Hand
	const hours = now.getHours();
	const hourDegrees = (((hours+(mins/60)) / 12) * 360)+ 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

//Runs setDate function every second.
setInterval(setDate, 1000);
