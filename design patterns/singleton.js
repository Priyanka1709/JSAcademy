function Instance(){
	var obj;

	function getInstance(){
		if(obj){
			return obj; 
		}
		else{
			obj= Object.create({});
			return obj;
		}
	}

	return {
		getInstance: getInstance
	}
}