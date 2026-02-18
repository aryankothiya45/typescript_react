import { useState} from 'react'
import Clock from './Clock'

export default function ClockContainer (){
    const [showClock, setShowClock] = useState(true);

    function toggleClock(){
        setShowClock(prev => !prev);
    }

    return(
        <div>
            <h2>Clock Container</h2>
            <button onClick={toggleClock}>
                {showClock ? 'Hide Clock' : 'Show Clock'}
            </button>
            {showClock && <Clock />}
        </div>
    );
}
