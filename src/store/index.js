import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./reducers";

const configureAppStore = preloadedState => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    enhancers: [monitorReducerEnhancer]
  });
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }
  return store;
};

export default configureAppStore;
