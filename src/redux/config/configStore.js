// Diubah ke versi Redux Toolkit

import { configureStore } from "@reduxjs/toolkit";
import cardsSlices from "../modules/cardsSlices";
import commentsSlices from "../modules/commentsSlices";

const store = configureStore({
  reducer: { cards : cardsSlices, comments: commentsSlices },
});

export default store;