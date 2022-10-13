
import {useSelector, useDispatch} from 'react-redux';

import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter.counter);
  const toggle = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  };
 
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Incrementer</button>
        <button onClick={increaseHandler}>Incrementer by 5</button>
        <button onClick={decrementHandler}>Decrementer</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {

//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Incrementer</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrementer</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
