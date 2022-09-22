import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'; 
import { desktopReducer } from './desktop.store';

export const store = configureStore({
  reducer: {
    desktop: desktopReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
