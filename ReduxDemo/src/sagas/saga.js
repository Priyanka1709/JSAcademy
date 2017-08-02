import react from "react";
import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes";

export function* helloSaga(){
    console.log("hello");
}

function* incrementAsync(){
    yield delay(2000);
    yield put({type: actionTypes.INCREMENT_COUNTER})
}

export function* watchIncrementAsync(){
   
    yield takeEvery(actionTypes.INCREMENT_ASYNC, incrementAsync);
}

export default function* rootSaga(){
    yield all([
            helloSaga(),
            watchIncrementAsync()
        ]);
}