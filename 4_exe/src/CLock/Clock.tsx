import { useState , useEffect, JSX } from "react";

const Clock = (): JSX.Element => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer: ReturnType<typeof setInterval> = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [])

    return(
        <div>
            Current Time: {time.toLocaleTimeString()}
        </div>
    );
}
export default Clock;