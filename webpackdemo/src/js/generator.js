let myObj=[10,4,6,5,2,3,7,12,34,56,12,1];

function* generate(condition, compute){
	var index= 0;
	 while(condition(index)){
	 	yield compute(myObj[index]);
	 	index++;
	 }
}

function compute(i){
	return i*i;
}

function condition(i){
	return i <= 10;
}

export let it= generate(condition, compute);

