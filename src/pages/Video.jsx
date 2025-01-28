
import { useDispatch, useSelector } from "react-redux";
import VideoDescription from "../components/video-description/VideoDescription";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchVideo } from "../features/video/videoSlice";
import RelatedVideoList from "../components/list/RelatedVideoList";
export default function Video(){
    const {videoId} = useParams();
    const {video, loading, error} = useSelector(state=>state.video);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchVideo(videoId));
    }, [videoId, dispatch])

    let content = null;
    if(loading) content = <div>Loading</div>;
    if(!loading && error) content = <div className="col-span-12">{error}</div>


    if(!loading && !error & !video?.id) content = <div className="col-span-12">No video found!</div>;
    if(!loading && !error && video?.id){
        content = (
            <>
                <VideoDescription video={video} />
                <RelatedVideoList currentVideoId={video.id} tags={video.tags}/>
            </>
        )
    }
    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    {content}
                </div>
            </div>
        </section>
    )
}