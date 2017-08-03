import react from "react";
import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest, all, race } from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes";

export function* helloSaga(){
    console.log("hello");
}

function* incrementAsync(){
    yield delay(2000);
    yield put({type: actionTypes.INCREMENT_COUNTER})
}

function fetch(){
    return  new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(14);
        },7000);  
    });
    
}

function timer(t){
    return  new Promise(function(resolve,reject){
        setTimeout(function(){
            // debugger;
            resolve(true);
        },t);  
    });
    
}

// function* fetchDataAll(){
//     yield put({type: actionTypes.DATA_FETCHING})
//     let {data, timeout}= yield all({ data: call(fetch), timeout: delay(5000)});
//     if(data){
//         yield put({type: actionTypes.FETCH_SUCCESS, value: data});
//     }
//     else if(timeout){
//         yield put({type: actionTypes.FETCH_ERROR, value: "No data received"});
//     }
    
// }

function* fetchData(){
    yield put({type: actionTypes.DATA_FETCHING})
    let {data, timeout}= yield race({ data: call(fetch), timeout: timer(2000)});
    if(data){
        yield put({type: actionTypes.FETCH_SUCCESS, value: data});
    }
    else if(timeout){
        yield put({type: actionTypes.FETCH_ERROR, value: "No data received"});
    }
    
}

// function* fetchData(){
//     yield* 
// }

export function* watchActions(){
    yield takeEvery(actionTypes.INCREMENT_ASYNC, incrementAsync);
    yield takeEvery(actionTypes.FETCH_DATA, fetchData);
}

export default function* rootSaga(){
    yield all([
            helloSaga(),
            watchActions(),
        ]);
}