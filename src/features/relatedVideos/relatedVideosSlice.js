import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosAPI";



export const fetchRelateVideos = createAsyncThunk('relatedVideos/fetchRelatedVideos', async ({tags, currentVideoId})=>{
    const relatedVideos = await getRelatedVideos({tags, id: currentVideoId});
    return relatedVideos;
})

const relatedVideosSlice = createSlice({
    name: 'relatedVideos',
    initialState: {
        relatedVideos: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchRelateVideos.pending, (state, action)=>{
                state.loading = true;
            })
            .addCase(fetchRelateVideos.fulfilled, (state, action)=>{
                state.loading = false;
                state.relatedVideos = action.payload;
            })
            .addCase(fetchRelateVideos.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default relatedVideosSlice.reducer;