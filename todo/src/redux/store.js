import { createStore } from 'redux';
import { change } from '../redux/reducers';
export const store = createStore(change)