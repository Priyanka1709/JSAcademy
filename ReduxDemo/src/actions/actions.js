import * as actionTypes from "../constants/actionTypes";

export function IncrementCounter(){
	return {
		type: actionTypes.INCREMENT_COUNTER
	}
}

export function DecrementCounter(){
	return {
		type: actionTypes.DECREMENT_COUNTER
	}
}

export function ResetCounter(){
	return {
		type: actionTypes.RESET_COUNTER
	}
}

export function IncrementAsync(){
	return {
		type: actionTypes.INCREMENT_ASYNC
	}
}

export function GetData(){
	return {
		type: actionTypes.FETCH_DATA
	}
}

function Async(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve();
		},2000);
	})
}
export const startIncrementAsync=() => {
	return (dispatch) =>{
		return Async()
				.then(() => 
					
					dispatch( {
						type: actionTypes.INCREMENT_COUNTER
					})
				)
				.catch((e)=> {
					console.log(e);
				})
	}
}