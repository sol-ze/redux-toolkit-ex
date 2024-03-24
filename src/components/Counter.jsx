import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice";

const Counter = () => {
  let count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+ Increment</button>
        <button onClick={() => dispatch(decrement())}>- decrement</button>
        <button onClick={() => dispatch(incrementAsync(10))}>+10</button>
      </div>
    </div>
  );
};
export default Counter;
