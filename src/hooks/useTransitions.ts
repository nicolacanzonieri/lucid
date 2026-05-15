import { useState, useEffect } from 'react';

export function useTransition(show: boolean, duration: number = 300) {
    const[shouldRender, setShouldRender] = useState(show);
    const [isAnimating, setIsAnimating] = useState(show);

    useEffect(() => {
        if (show) {
            setShouldRender(true);
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
            setTimeout(() => setShouldRender(false), duration);
        }
    }, [show, duration]);

    return { shouldRender, isAnimating };
}