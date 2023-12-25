import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    loggedUser:"",
    datas:[]
  },  
  
  reducers: {
    loggedUser:(state,action)=>{
      state.loggedUser= action.payload
    },

    addToDo:(state, action)=> {
    state.datas= [...state.datas,action.payload]
    },
    // todoToggled(state, action) {
    //   const todo = state.find(todo => todo.id === action.payload)
    //   todo.completed = !todo.completed
    // }
  }
})

export const { loggedUser,addToDo } = todosSlice.actions
export default todosSlice.reducer