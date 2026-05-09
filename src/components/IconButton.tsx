import type { ReactNode } from 'react';

interface IconButtonProps {
    children: ReactNode;
    className?: string;
}

function IconButton({ children, className="" }: IconButtonProps) {
    return (
        <div className={`aspect-square h-full bg-white/20 rounded-xl border border-white/20 flex flex-row items-center justify-center ${className} transition-all duration-300 hover:bg-white/30 hover:border-white/30 hover:text-white`}>
            {children}
        </div>
    );
}

export default IconButton;