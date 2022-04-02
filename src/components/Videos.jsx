import VideoSquare from "./VideoSquare";
import data from "../data/videos.json";

export default function Videos() {
    return (
        <div>
            <div className="d-flex justify-content-center"><h1>VIDEOS</h1></div>
            <div className="pt-5">
                {
                    Object.keys(data).map((e) => {
                        return <VideoSquare
                            key={e}
                            videoId={data[e].videoId}
                            title={data[e].title}
                            description={data[e].description}
                        />
                    })
                }
            </div>
        </div>
    );
}