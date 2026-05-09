import { useEffect } from 'react';

export const useUserActivity = (callback) => {
    useEffect(() => {
        // Function that handles the event
        const handleActivity = (event) => {
            callback(event);
        };

        // Events to monitor
        const events = ['keydown', 'mousemove', 'mousedown'];

        // Add listeners to the window
        events.forEach((event) => window.addEventListener(event, handleActivity));

        // Cleanup: essential to remove listeners when the component unmounts
        return () => {
            events.forEach((event) => window.removeEventListener(event, handleActivity));
        };
    }, [callback]);
};