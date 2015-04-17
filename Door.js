function Door( name, roomOnOtherSideOfDoor, isLocked)
{
	this.name = name;
	this.isLocked = isLocked;
	this.roomOnOtherSideOfDoor = roomOnOtherSideOfDoor;
	
	this.unlock =  function unlock()
	{
		isLocked = false;
	}//end roll

}//End Dice