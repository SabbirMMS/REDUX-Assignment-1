import { useDispatch, useSelector } from "react-redux"
import VideoGridItem from "./VideoGridItem"
import { fetchVideos } from "../../features/videos/videosSlice";
import { useEffect } from "react";
export default function Videos(){
    const {videos, loading, error} = useSelector(state=>state.videos);
    const {tags, search} = useSelector(state=>state.filter);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchVideos({tags, search}));
    },[dispatch, tags, search]);
    let content;
    if(loading) content = <div>Loading</div>;
    if(!loading && error) content = <div className="col-span-12">{error}</div>
    if(!loading && videos.length > 0){
        content = videos.map(video=><VideoGridItem key={video.id} video={video}/>)
    } 
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >   
                    {content}
                </div>
            </section>
        </section>
    )
}