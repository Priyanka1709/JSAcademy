function sum(){
	var result=0;

	for(var i=0;i<arguments.length;i++){
		result+= arguments[i];
	}

	function repeatSum(){
		if(arguments.length){
			for(var i=0;i<arguments.length;i++){
				result+= arguments[i];
			}
			return repeatSum;
		}	
		else{
			return result;
		}
		
	}

	repeatSum.prototype.valueOf= function(){
		return result;
	}
	return repeatSum;
}
