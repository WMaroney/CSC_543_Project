window.addEventListener( 'DOMContentLoaded', function () 
	{
		const all_dice = document.getElementById( "dice_list" ).querySelectorAll( ".dice" ); //Static NodeList containing all "dice" elements. Initialized outside of function for speed/efficiency.
		const buttonRollDice = document.querySelector( ".dice-roll" );
		buttonRollDice.addEventListener( 'click', rollDice, false ); //Call rollDice() when the button is clicked

		const status = document.getElementById( 'status' );


		function rollDice ()
		{let values = [] //Array for storing dice rolls.
		for (let id = 0; id < all_dice.length; id++) {
			//status.textContent += all_dice[id].classList;
			if (all_dice[id].classList.contains('unheld')) //Loop through all unheld dice objects. Generate a random roll for each. Store the values, display them as strings on the page, and mark scorable dice as such (adding green border).  
			{
				let die_roll = Math.floor( Math.random() * 6) + 1;
				values.push(die_roll);
				all_dice[id].textContent = die_roll.toString();
				if (die_roll in [1,5]) //Need to add regex for triples, etc. 
				{
					all_dice[id].classList.add( "scorable" );
				}
			}
		}
		
		let scorable_dice = document.getElementById( "dice_list" ).querySelectorAll( ".scorable" );
		if (scorable_dice.length === 0) {
			status.textContent = "Sorry, that's a bust! No 1s, 5s, or multiples detected."
		} else {
			status.textContent = 'Click on the HOLD button next to the die or dice you want to score.'
		}
		}



}, false);