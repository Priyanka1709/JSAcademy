function Observer(){
	var subscribers= [];

	function subscribe(func){
		if(subscribers.indexOf(func) < 0){
			subscribers.push(func);
		}
	}

	function unSubscribe(func){
		var subscriberIndex= subscribers.indexOf(func);
		if(subscriberIndex >= 0){
			subscribers[i]= undefined;
		}
	};
	
	function fireEvent(){
		for(var i=0; i< subscribers.length; i++){
			subscribers[i]();
		}
	};

	return {
		subscribe: subscribe,
		unSubscribe: unSubscribe,
		fireEvent: fireEvent
	};
}