import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { themeReducer } from './theme/themeSlice';
import { moviesReducer } from './movies/moviesSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];


const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['darkTheme'],
};

export const store = configureStore({
  reducer: {
    theme: persistReducer(themePersistConfig, themeReducer),
    movies: moviesReducer,
  },
  middleware,
});

export const persistor = persistStore(store);