"use strict";

Array.prototype.reduce= function(callback, initialValue){
	var accumulator= initialValue;

	for(var i=0; i< this.length; i++){
		accumulator= callback(accumulator, this[i], i, this);
	}
	return accumulator;
}

var arr= [1,2,3,4,10];
var reducedVal= arr.reduce(function(acc,value){
	return acc+value;
}, 10);

console.log(reducedVal);