import { useState, useEffect } from "react";

import IconButton from "../components/IconButton";

interface HeadbarProps {
    isUserIdle?: boolean;
    onClickSettings?: () => void;
}

function Headbar({ isUserIdle=false, onClickSettings }: HeadbarProps) {
    const [currentTime, setCurrentTime] = useState(new Date());

    // TIMING
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    },[]);

    const dayName = currentTime.toLocaleDateString("en-GB", { weekday: "short" }).toUpperCase();
    const dayNumber = currentTime.getDate();
    const monthName = currentTime.toLocaleDateString("en-GB", { month: "short" }).toUpperCase();
    const time = currentTime.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false });

    return (
        <div className={`w-full h-17 flex flex-row items-center justify-between p-p-2`}>
            {/* TIME */}
            <div className={`h-full flex flex-col items-start`}>
                <span className={`font-elms text-neutral-300 text-md font-bold select-none`}>
                    {`${time} ${dayName} ${dayNumber} ${monthName}`}
                </span>
                <span className={`font-elms text-neutral-300 text-md font-light select-none`}>
                    Welcome to Lucid, Nico
                </span>
            </div>

            {/* Settings */}
            <IconButton isUserIdle={isUserIdle} ariaLabel="Open settings" onClick={onClickSettings}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 10.27 7 3.34"/><path d="m11 13.73-4 6.93"/><path d="M12 22v-2"/><path d="M12 2v2"/><path d="M14 12h8"/><path d="m17 20.66-1-1.73"/><path d="m17 3.34-1 1.73"/><path d="M2 12h2"/><path d="m20.66 17-1.73-1"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m3.34 7 1.73 1"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="8"/></svg>
            </IconButton>
        </div>
    );
}

export default Headbar;