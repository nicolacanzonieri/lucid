import { useEffect, useRef } from 'react';

// Type for the callback function
type ActivityCallback = (event: Event) => void;

export const useUserActivity = (callback: ActivityCallback, delay: number = 1000) => {
    const lastCall = useRef<number>(0);

    useEffect(() => {
        // Function that handles the event
        const handleActivity = (event: Event) => {
            const now = Date.now();
            if (now - lastCall.current >= delay) {
                lastCall.current = now;
                callback(event);
            }
        };

        // Events to monitor
        const events = ['keydown', 'mousemove', 'mousedown'] as const;
        
        // Add listeners to the window
        events.forEach((event) => window.addEventListener(event, handleActivity));

        return () => {
            events.forEach((event) => window.removeEventListener(event, handleActivity));
        };
    },[callback, delay]);
};