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
        <div id='videoSquare' class="card mb-3 pt-1 ps-1">
            <div class="row g-0">
                <div class="col-md-4">
                    <YouTube
                        className='rounded-3'
                        videoId={props.videoId}
                        opts={options}
                    />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <a id='title-card-id' href={`${URLBase}${props.videoId}`} class="card-title">{props.title}</a>
                        <p class="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}