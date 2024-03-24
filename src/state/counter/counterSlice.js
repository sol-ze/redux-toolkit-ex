import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state /*, action*/) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
/* typescript
interface CounterState {
value:number;
}

const initialState: CounterState = {
value:0;
}
const counterSlice = createSlice ({
	name: "counter",
	initialState,
	reducers: {},
});

export default cunterSlice.reducer;*/
