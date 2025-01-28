import { useDispatch, useSelector } from "react-redux"
import RelatedVideoListItem from "./RelatedVideoListItem"
import { useEffect } from "react";
import { fetchRelateVideos } from "../../features/relatedVideos/relatedVideosSlice";

export default function RelatedVideoList({currentVideoId, tags}){
    const {relatedVideos, loading, error} = useSelector(state=>state.relatedVideos);
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchRelateVideos({tags, currentVideoId}))
    }, [dispatch, currentVideoId, tags]);

        let content = null;
        if(loading) content = <div>Loading</div>;
        if(!loading && error) content = <div className="col-span-12">{error}</div>
    
    
        if(!loading && !error && !relatedVideos?.length === 0) content = <div className="col-span-12">No related video found!</div>;
        console.log(relatedVideos.id)
        if(!loading && !error && relatedVideos?.length > 0){
            content = relatedVideos.map((video)=> (
                <RelatedVideoListItem key={video.id} video={video} />
            ))
        }
        
    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {content}
        </div>
    )
}