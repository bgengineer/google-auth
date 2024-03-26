import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({user: userReducer})

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistReducers = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer:{ persistReducers }
})

export const presistor = persistStore(store)