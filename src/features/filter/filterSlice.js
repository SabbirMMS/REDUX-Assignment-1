import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        tags: [],
    },
    reducers: {
        setSearchTerm(state, action){
            state.search = action.payload;
        },

        toggleTag(state, action){
            const index = state.tags.indexOf(action.payload);
            if(index === -1){
                state.tags.push(action.payload);
            }else{
                state.tags.splice(index, 1);
            }
        }
    }
})
export const {setSearchTerm, toggleTag} = filterSlice.actions
export default filterSlice.reducer;
