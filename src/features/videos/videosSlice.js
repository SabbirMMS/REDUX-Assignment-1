import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";



export const fetchVideos = createAsyncThunk('videos/fetchVideos', async ({tags, search})=>{
    const videos = await getVideos({tags, search});
    return videos;
})

const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        videos: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchVideos.pending, (state, action)=>{
                state.loading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action)=>{
                state.loading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default videosSlice.reducer;