import { useEffect, useRef } from 'react';

export const useUserActivity = (callback, delay = 1000) => {
    const lastCall = useRef(0);

    useEffect(() => {
        // Function that handles the event
        const handleActivity = (event) => {
            const now = Date.now();
            if (now - lastCall.current >= delay) {
                lastCall.current = now;
                callback(event);
            }
        };

        // Events to monitor
        const events = ['keydown', 'mousemove', 'mousedown'];
        
        // Add listeners to the window
        events.forEach((event) => window.addEventListener(event, handleActivity));

        // Cleanup: essential to remove listeners when the component unmounts
        return () => {
            events.forEach((event) => window.removeEventListener(event, handleActivity));
        };
    }, [callback, delay]);
};