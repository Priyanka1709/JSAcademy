Function.prototype.curry= function(n){
	var func= this;

	var functionLength= n || func.length;

	var args= [];

	var slice= Array.prototype.slice;

	function curriedFunction(){
		args= args.concat(slice.call(arguments, 0));

		if(args.length < functionLength){
			return curriedFunction;	
		}

		else{
			return func.apply(this, args);
		}
	}
	return curriedFunction;
}

function sum(){
	var result= 0;

	for(var i=0; i< arguments.length; i++){
		result+= arguments[i];
	}

	return result;
}	

var sumCurry= sum.curry(5);

console.log(sumCurry(1,2)(3)(4,5));