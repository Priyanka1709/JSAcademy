let myObj=[10,4,6,5,2,3,7,12,34,56,12,1];

myObj[Symbol.iterator]= function(condition, compute){
	var result;
	var nextIndex=1;
	return{
		next(){
			if(condition(nextIndex) && myObj[nextIndex]){
				result= compute(myObj[nextIndex]);
				nextIndex++;
				return {
					value: result,
					done: false
				};
			}
			else{
				return {
					done: true
				};
			}
		}
	}
}

function compute(i){
	return i*i;
}

function condition(i){
	return i <= 10;
}

export let it= myObj[Symbol.iterator](condition, compute);

