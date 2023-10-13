import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import modal from "./modal";

const store = configureStore({
  reducer: {
    //store
    auth,
    modal,
  },
});

export default store;
