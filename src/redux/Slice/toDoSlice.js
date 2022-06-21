import { createSlice } from '@reduxjs/toolkit'

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {
        array: []
    },
    reducers: {
        addToDo: (state, { payload }) => {
            state.array = [...state.array, payload]
        },
        editToDo: (state, { payload }) => {
            state.array = state.array.map(element => {
                return element.id === payload.id ? payload : element
            })
        },
        deleteToDo: (state, { payload }) => {
            state.array = state.array.filter(element => element.id !== payload)
        }
    }
})

export const { addToDo, editToDo, deleteToDo } = toDoSlice.actions
export default toDoSlice.reducer