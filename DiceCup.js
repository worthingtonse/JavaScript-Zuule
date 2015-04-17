
function DiceCup( dices )
{
	this.dice =  dices;
	
	this.roll =  function roll()
	{ 
	 var total = 0;
		for (i = 0; i < dice.length; ++i) 
		{
               total += dice[i].roll() ;
		}
     return total;
	}//end roll

	
	
	
	
}