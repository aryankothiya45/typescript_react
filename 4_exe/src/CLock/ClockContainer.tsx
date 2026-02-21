import { useState} from 'react'
import Clock from './Clock'
import { JSX } from "react/jsx-runtime";

const ClockContainer = (): JSX.Element=> {
    const [showClock, setShowClock] = useState<boolean>(true);

    const toggleClock = (): void => {
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

export default ClockContainer;
