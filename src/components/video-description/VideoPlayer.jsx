export default function VideoPlayer({videoTitle, videoLink}){
    return (
        <iframe
            width="100%"
            className="aspect-video"
            src={videoLink}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    )
}