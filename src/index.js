import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import rootSaga from "./store";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware} from 'redux';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(

    <Provider store={store}>
      <App />
    </Provider>,
  
  document.getElementById('root'),
);


reportWebVitals();
