
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth'




const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
})



export default store;
// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//             }
//     }
//     if(action.type === 'increase') {
//         return {
//             counter: state.counter + action.value,
//             showCounter: state.showCounter
//             }
//     }
//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//             }
//     }

//     if(action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state;

// }
// const counterSubscribe = () => {
//     const latestState = store.getState();
//     console.log(latestState)
// }
// store.subscribe(counterSubscribe);
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});