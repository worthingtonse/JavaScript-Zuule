function Monster( name, description, saying )
{
	this.name = name;
	this.description = description;
	this.saying = saying;
	this.isAlive = true;
	
	this.getDialogue =  function getDialogue()
	{
		 return saying;
	}//end roll

}//End Monster