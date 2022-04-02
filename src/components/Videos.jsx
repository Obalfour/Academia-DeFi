import YouTube from 'react-youtube';

export default function Videos() {
    return (
        <div>
            <h1>Videos</h1>
            <YouTube
                videoId={'2g811Eo7K8U'}
                opts={{
                    height: '390',
                    width: '640',
                    playerVars: { // https://developers.google.com/youtube/player_parameters
                        autoplay: 0
                    }
                }}
            />
        </div>
    );
}