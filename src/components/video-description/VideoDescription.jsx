import VideoLikeUnlike from "./VideoLikeUnlike";
import VideoPlayer from "./VideoPlayer";
export default function VideoDescription({video}){
    // const {video, loading, error} = useSelector(state=>state.video);
    const {title, link, description, date} = video;
    console.log('video description')
    console.log(video)
    return (
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <VideoPlayer videoTitle={title} videoLink={link} />

            <div>
                <h1
                    className="text-lg font-semibold tracking-tight text-slate-800"
                >
                    {title}
                </h1>
                <div
                    className="pb-4 flex items-center space-between border-b"
                >
                    <h2
                        className="text-sm leading-[1.7142857] text-slate-600 w-full"
                    >
                        Uploaded on {date}
                    </h2>

                    <VideoLikeUnlike video = {video} />
                </div>

                <div
                    className="mt-4 text-sm text-[#334155] dark:text-slate-400"
                >
                    {description}
                </div>
            </div>
        </div>
    )
}