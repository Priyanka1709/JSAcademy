"use strict";

Function.prototype.partialRight= function(){
	var func= this; //storing function's reference

	var slice= Array.prototype.slice; // getting array's slice function

	var args= slice.call(arguments, 0); // converting arguments to array

	return function(){
		args=slice.call(arguments, 0).concat(args); // creating partial set of arguments

		return func.apply(this, args); // calling original function
	} 
}

function subtract(a,b,c,d){
	return (a+b)-(c+d);
}

var subtract3= subtract.partialRight(1,2);
console.log(subtract3(3,4));