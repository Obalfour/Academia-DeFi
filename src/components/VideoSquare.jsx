import YouTube from 'react-youtube';
import './styles/Videos.css';

const options = {
    height: '250',
    width: '425',
    playerVars: {
        autoplay: 0
    }
};

const URLBase = 'https://youtu.be/';

export default function VideoSquare(props) {
    return (
        <div id='videoSquare' className="card mb-3 pt-1 ps-1 bg-transparent text-white fw-light">
            <div className="row g-0">
                <div className="col-md-4">
                    <YouTube
                        className='rounded-3'
                        videoId={props.videoId}
                        opts={options}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <a id='title-card-id' href={`${URLBase}${props.videoId}`} className="card-title">{props.title}</a>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}