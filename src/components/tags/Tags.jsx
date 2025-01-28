import { useDispatch, useSelector } from "react-redux"
import Tag from "./Tag"
import { useEffect } from "react";
import { fetchTags } from "../../features/tags/tagsSlice";
export default function Tags(){
    const {tags, loading, error} = useSelector(state=>state.tags);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTags());
    },[dispatch]);
    console.log(tags)
    return (
        <section>
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
            >   
                {loading && <div>Loading</div>}
                {tags.map(tag => <Tag tag={tag} key={tag.id} />)}
            </div>
        </section>
    )
}