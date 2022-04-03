import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {

  const { count } = useSelector((state) => state.counter); // this could also be written as state.counter.count
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className='counter-container'>
        <h1> The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button> {/*we used dispatch() instead of the setState()  */}
        <button onClick={() => dispatch(decrement())}>Decrement</button> 
        <button onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button> 
      </div>
    </div>
  );
}

export default App;
