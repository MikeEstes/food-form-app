import { combineReducers, createStore } from 'redux';
import foodReducer from './reducers/foodReducer';

// Combine all reducers here
const rootReducer = combineReducers({
  foodReducer: foodReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
