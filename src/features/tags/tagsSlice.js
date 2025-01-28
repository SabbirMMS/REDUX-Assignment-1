import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";



export const fetchTags = createAsyncThunk('tags/fetchTags', async ()=>{
    const tags = await getTags();
    return tags;
})

const tagsSlice = createSlice({
    name: 'tags',
    initialState: {
        tags: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchTags.pending, (state, action)=>{
                state.loading = true;
            })
            .addCase(fetchTags.fulfilled, (state, action)=>{
                state.loading = false;
                state.tags = action.payload;
            })
            .addCase(fetchTags.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default tagsSlice.reducer;