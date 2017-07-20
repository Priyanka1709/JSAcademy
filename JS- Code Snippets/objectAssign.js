Object.prototype.clone =function(depthArr){

	var newObj= JSON.parse(JSON.stringify(this));
	var newObjRef= newObj;
	var prevRef= this;
	for(var i=0; i< (depthArr.length -1);i++){
		if(prevRef[depthArr[i]]){
			prevRef= prevRef[depthArr[i]];
			newObjRef= newObjRef[depthArr[i]];
		}
		else{
			break;
		}
	}
	for(var prop in prevRef){
		if(prevRef.hasOwnProperty(prop)){
			newObjRef[prop]= prevRef[prop];
		}
	}
	return newObj;
}

Object.prototype.assign= function(path, value, write){
	var decodedPath= path.split("/");
	var newObj= this.clone(decodedPath);
	var prevRef= newObj;
	var currPath;

	for(var i=0; i<decodedPath.length; i++){
		// constructing object of the form a/b/c
		currPath= decodedPath[i];
		if(!prevRef[currPath]){
			if(i !== (decodedPath.length -1)){
				prevRef[currPath]={};
			}
			else{
				prevRef[currPath]= value;
			}
		}
		else if(i === (decodedPath.length -1)){
			// overwrite based on write flag if a/f is already present
			if(write){
				prevRef[currPath]= value;
			}
			else{
				console.log("Cannot rewrite " + path);
			}
		}

		prevRef= prevRef[currPath];
	}
	return newObj;
}

var initialState= {};
initialState= initialState.assign("a/b/c",2);
initialState= initialState.assign("a/b/d",3);
initialState= initialState.assign("a/e",13);
initialState= initialState.assign("a/f",18);