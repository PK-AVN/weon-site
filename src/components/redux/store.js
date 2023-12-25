import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './actionsReducer/index'

const store = configureStore({
    reducer: {
        todos: mainReducer 
      }
    })

export default store;