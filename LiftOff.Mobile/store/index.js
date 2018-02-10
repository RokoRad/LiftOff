// dohvaćanje funckija i vrijednost reducera reduxa
import { createStore } from 'redux';
import reducer from '../reducers';

// kreiranje redux storea - okosnice
export default createStore(reducer);
