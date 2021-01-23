import { createStore } from 'redux';
import storeSynchronize from 'redux-localstore'
import rootReducer from '../reducers';

export const store = createStore(rootReducer)

storeSynchronize(store)