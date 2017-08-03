import * as actionTypes from "../constants/actionTypes";

const initialState= {
	counter: 0,
	fetching: false
}

export default function stateReducer(state= initialState, action){
	
	switch(action.type){
		case actionTypes.INCREMENT_COUNTER:
			console.log(1/0);
			return Object.assign({}, ...state, {counter: state.counter + 1});

		case actionTypes.DECREMENT_COUNTER:
			console.log(state);
			return Object.assign({}, ...state, {counter: state.counter - 1});

		case actionTypes.RESET_COUNTER:
			console.log(state);
			return Object.assign({}, ...state, {counter: 0});
		
		case actionTypes.DATA_FETCHING:
			return Object.assign({}, ...state, {fetching: true});
		
		case actionTypes.FETCH_SUCCESS:
		case actionTypes.FETCH_ERROR:
			return Object.assign({}, ...state, {fetching: false, counter:action.value});

		default:
			return state;
	}
}