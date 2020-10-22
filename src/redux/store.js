import {applyMiddleware, combineReducers, createStore} from 'redux';
import photoReducer from './photo-reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  mainPage: photoReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
