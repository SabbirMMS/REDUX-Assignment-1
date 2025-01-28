import { useDispatch, useSelector } from "react-redux"
import { toggleTag } from "../../features/filter/filterSlice";

export default function Tag({tag}){
    const {tags} = useSelector(state=>state.filter);
    const dispatch = useDispatch();
    const isSelected = tags.includes(tag.name) ? true : false;
    const selectedColor = isSelected ? 'bg-blue-600' : 'bg-blue-100';
    const handleSelect = ()=>{
        // if(isSelected){
        //     dispatch(toggleTag(tag));
        // }else{
        //     dispatch(toggleTag(tag));
        // }
        dispatch(toggleTag(tag.name));
    }
    return (
        <>
            <div
                className={`${selectedColor} text-blue-600 px-4 py-1 rounded-full cursor-pointer`}
                onClick={handleSelect}
            >
                {tag.name}
            </div>
            {/* <div
                className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
            >
                JavaScript
            </div> */}
        </>
    )
}