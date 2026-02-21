import React from 'react';
import { useRef, useCallback } from 'react';

const WIDTH = 320;

const VideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = useCallback((): void => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);
    const handlePause = useCallback((): void => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }, []);

    return(
        <div>
            <h2>Video Player</h2>
            <video
                ref={videoRef}
                width={WIDTH}
                controls 
            >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support HTML video.
            </video>
            <div>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>
        </div>
    );
}
export default VideoPlayer;