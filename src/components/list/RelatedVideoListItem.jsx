import { Link } from "react-router-dom";

export default function RelatedVideoListItem({video}){
    const {id, title, views, date, thumbnail, link, description, duration} = video;
    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div
                className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
            >
                <Link to={`/video/${id}`}>
                    <img
                        src={thumbnail}
                        className="object-cover"
                        alt="Some video title"
                    />
                </Link>
                <p
                    className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                >
                    {duration}
                </p>
            </div>

            <div className="flex flex-col w-full">
                <a href="#">
                    <p
                        className="text-slate-900 text-sm font-semibold"
                    >
                        {title}
                    </p>
                </a>
                <a
                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    href="#"
                >
                    As Sunnah Skill Development Institute
                </a>
                <p className="text-gray-400 text-xs mt-1">
                    {views} views . {date}
                </p>
            </div>
        </div>
    )
}