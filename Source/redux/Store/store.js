import {combineReducers, applyMiddleware, createStore} from 'redux';;
import thunk from 'redux-thunk';
import {DataReducer} from '../reducer/Reducer';
import {createLogger} from 'react-logger';

const appreducer = combineReducers({
  data: DataReducer,
});

const rootReducer = (state, action) => {
  appreducer(state, action);
};

const logger = createLogger();


export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

