function Room( description )
{
	this.description = description;
	this.Monster = monster;
	this.Equipment = item;
	
	this.setDoor =  function unlock()
	{
		isLocked = false;
	}//end set door

	this.getShortDescription =  function getShortDescription()
	{
		return = description;
	}//end getShortDescription
	
	this.getLongDescription =  function getLongDescription()
	{
		return = "You are " + description + ".\n" + getExitString();
	}//end getLongDescription
	
	this.getExitString =  function getExitString()
	{
		var returnString = "Exits:";
        for(Door door : getDoors()) {
            returnString += " " + door.name;
            returnString += ", ";
        }
        return returnString.substring(0, returnString.lastIndexOf(","));//gets rid of last comma
	}//end getLongDescription
	
	this.getExit =  function getExit( direction )
	{
		Room r = this;
        for(Door d: doors )
        {
            if( d.name.equalsIgnoreCase( direction ) )
            {
                r =  d.roomOnOtherSideOfDoor;
            }//end if
        }//end for
         return r;
	}//end getExit
	
	this.getDoor =  function getDoor( doorName )
	{
		for (Door door : getDoors()){
            if (door.name.equals(doorName)){
                return door;
            }
        }
        return null;
	}//end getDoor
	
	this.addItem =  function addItem( item )
	{
		this.item = item;
	}//end getDoor
	
	this.takeItem =  function takeItem( )
	{
		res = item;
        item = null;
        return res;
	}//end getDoor
	
	this.getDoors =  function getDoors( )
	{
		return doors;
	}//end getDoor
	
	this.getCommands =  function getCommands( )
	{
		commandList = [];

        for( int i =0 ; i < doors.size(); i++ )
        {
            commandList.push("go " + doors.get(i).name ) ;
            if( doors.get(i).isLocked )
            { 
                commandList.push("unlock " + doors.get(i).name) ;
            }
        }

        //Get go commands
        if( item != null )
        { 
            commandList.push("take " + item.getName());
        }//number of items in the room

        commandList.push("quit");
        commandList.push("restart");
        returnCommands = [];
        return commandList.toArray(returnCommands);
	}//end getDoor
	
	this.getMonster =  function getMonster( )
	{
		return this.monster;
	}//end getDoor
	
	
}//End Room