import type { ReactNode } from 'react';

interface IconButtonProps {
    children: ReactNode;
    className?: string;
}

function IconButton({ children, className="" }: IconButtonProps) {
    return (
        <div className={`aspect-square h-full rounded-xl bg-white/35 flex flex-row items-center justify-center ${className}`}>
            {children}
        </div>
    );
}

export default IconButton;