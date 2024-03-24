import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
//if we're working with TS
// export type RootState = ReturenType<typeof store.getState>;
// export  type AppDispatch = typeOf store.dispatch;
