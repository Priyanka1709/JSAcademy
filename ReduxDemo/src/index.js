import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/container"; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from "react-redux";
import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "./middleware/middleware";
import createSagaMiddleWare from "redux-saga";

import myReducers from "./reducers/reducer";
import rootSaga from "./sagas/saga";

var sagaMiddleWare= createSagaMiddleWare();

const reducers= combineReducers({
    state: myReducers
});

const store= createStore(reducers,
    applyMiddleware(logger, thunk, sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
	<div>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </div>,
	document.getElementById("container")
);
