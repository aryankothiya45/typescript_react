import React from 'react';
import { useRef } from 'react';

export default function VideoPlayer() {
    const videoRef = useRef(null);

    function handlePlay() {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }
    function handlePause() {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }

    return(
        <div>
            <h2>Video Player</h2>
            <video
                ref={videoRef}
                width="420"
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