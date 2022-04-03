import VideoSquare from "./VideoSquare";
import data from "../data/videos.json";

export default function Videos() {
    return (
        <div>
            <div className="d-flex bg-dark justify-content-center"><h1 className="fs-1 fw-bold text-white">VIDEOS</h1></div>
            <div className="pt-5 m-5">
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