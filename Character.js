function Character( characterName, charClass )
{
	this.charClass = charClass;
	/**
         * Number of STRength points
         * given based on a random roll of 3 6-sided dye.
         */
        this.STR = roll3D6();
        
        /**
         * Number of INTelligence points
         * given based on a random roll of 3 6-sided dye.
         */
        this.INT = roll3D6();
        
        /**
         * Number of WISdom points 
         * given based on a random roll of 3 6-sided dye.
         */
        this.WIS = roll3D6();
        
         /**
         * Number of DEXterity points 
         * given based on a random roll of 3 6-sided dye.
         */
        this.DEX = roll3D6();
     
         /**
         * Number of CONstitution  points 
         * given based on a random roll of 3 6-sided dye.
         */
        this.CON = roll3D6();
       
         /**
         * Number of CHArisma points 
         * given based on a random roll of 3 6-sided dye.
          */;
        this.CHA = roll3D6();
        
        /**
         * Number of points given 
         * for attack bonus by calling on the "findMod" method.<!-- -->
         * Influences DEXterity.
         */
        this.attackBonus = findMod(DEX) ;
        
         /**
         * Number of points given 
         * for damage bonus by calling on the "findMod" method.<!-- -->
         * Influences STRength.
         */
        this.damageBonus = findMod(STR);
     
         /**
         * Number of points given 
         * for armor bonus by calling on the "findMod" method.<!-- -->
         * Influences DEXterity.
         */
        this.armorBonus = findMod(DEX);
   
        /**
         * Number of hit points given
         * by calling on "classHP" method and based on specific range.
         */
        this.hp = classHP();
        
        /**
        * Number of initial armor class.
        */
        this.ac = 10;
  
        /**
        * maximum damage the player can do to an enemy.
        */
        this.maxDamage = 1;//fists
	
	this.getDialogue =  function getDialogue()
	{
		 return saying;
	}//end roll

}//End Monster