import { createSlice } from '@reduxjs/toolkit'
import {sweetAlertMixin} from '../../Utils/alert'

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {
        array: []
    },
    reducers: {
        addToDo: (state, { payload }) => {
            state.array = [...state.array, payload]
            sweetAlertMixin('success', 'Se agrego correctamente')
        },
        editToDo: (state, { payload }) => {
            state.array = state.array.map(element => {
                return element.id === payload.id ? payload : element
            })
            sweetAlertMixin('success', 'Se modifico correctamente')
        },
        deleteToDo: (state, { payload }) => {
            state.array = state.array.filter(element => element.id !== payload)
        }
    }
})

export const { addToDo, editToDo, deleteToDo } = toDoSlice.actions
export default toDoSlice.reducer