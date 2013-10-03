// makes words olural
var pluralize= function(word,num)
{
    return num === 1 ? word : word + "s";
};

// Victim info
var getVictimInfo=function(){
   var victim={};
   victim.name=promptInfo("name");
   victim.phone=promptInfo("phone");
   victim.street=promptInfo("street");
   console.log(victim);
   return victim.name +","+ victim.phone+ ","+victim.street;
};

var promptInfo = function(info){
    var userInput= prompt("Please enter your "+ info +":");
	return userInput;
};

var displayInfo=function(){
	return alert("Thank you! Victim entered: \n" + getVictimInfo());
};

// remove falsey values from an Array
var removeFalseyValues= function(arrayFalsey){
	
	for(i=array.length-1;i>=0;i--)
	{
	  	arrayFalsey[i]? true : arrayFalsey.splice(i,1);

	}
    return arrayFalsey;
};