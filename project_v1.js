window.addEventListener( 'DOMContentLoaded', function () 
	{
	
		const buttonRollDice = document.querySelector( '.dice-roll' );

		function rollDice () 
		{

		const diceSide1 = document.getElementById( 'dice-side-1' );
		const diceSide2 = document.getElementById( 'dice-side-2' );
		const diceSide3 = document.getElementById( 'dice-side-3' );
		const diceSide4 = document.getElementById( 'dice-side-4' );
		const diceSide5 = document.getElementById( 'dice-side-5' );
		const diceSide6 = document.getElementById( 'dice-side-6' );
		
		const status = document.getElementById( 'status' );

		const side1 = Math.floor( Math.random() * 6 ) + 1;
		const side2 = Math.floor( Math.random() * 6 ) + 1;
		const side3 = Math.floor( Math.random() * 6 ) + 1;
		const side4 = Math.floor( Math.random() * 6 ) + 1;
		const side5 = Math.floor( Math.random() * 6 ) + 1;
		const side6 = Math.floor( Math.random() * 6 ) + 1;
		
		const diceTotal = side1 + side2 + side3 + side4 + side5 + side6;

		diceSide1.innerHTML = side1;
		diceSide2.innerHTML = side2;
		diceSide3.innerHTML = side3;
		diceSide4.innerHTML = side4;
		diceSide5.innerHTML = side5;
		diceSide6.innerHTML = side6;

		status.innerHTML = 'You rolled ' + diceTotal + '.';
// FIX THIS so we are checking for doubles, triples, guads, etc


		if ( side1 === side2 || side2 === side3 || side3 === side4 || side4 === side5 || side5 === side6 || side1 === side3 || side1 === side4 || side1 === side5 || side1 === side6 || side2 === side4 || side2 === side5 || side2 === side6 || side3 == side5 || side3 === side5 || side3 === side6 || side4 === side6) 
		{
			status.innerHTML += ' Doubles! You get a free turn!';
		}
	}

	buttonRollDice.addEventListener( 'click', rollDice, false );
}, false);