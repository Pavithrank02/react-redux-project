import {createStore } from 'redux'

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
            }
    }
    if(action.type === 'deccrement') {
        return {
            counter: state.counter - 1,
            }
    }

    return state;

}
const store = createStore(counterReducer);

export default store;
// const counterSubscribe = () => {
//     const latestState = store.getState();
//     console.log(latestState)
// }
// store.subscribe(counterSubscribe);
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});