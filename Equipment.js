function Door( name, weight )
{
	this.name = name;
	this.weight = weight;
	
	this.getName =  function getName()
	{
		   return name;
	}//end getName
	
	this.setName =  function setName( name )
	{
		   this.name = name;
	}//end setName

	this.getWeight =  function getWeight()
	{
		   return weight;
	}//end getWeight
	
	this.setWeight =  function setWeight( weight )
	{
		   this.weight = weight;
	}//end setWeight
	
}//End Dice