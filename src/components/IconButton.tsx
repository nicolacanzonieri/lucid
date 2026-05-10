import type { ReactNode } from 'react';

interface IconButtonProps {
    children: ReactNode;
    className?: string;
}

function IconButton({ children, className="" }: IconButtonProps) {
    return (
        <div className={`aspect-square h-full bg-white/15 rounded-xl border border-white/15 flex flex-row items-center justify-center ${className} transition-all ease-in-out duration-300 hover:bg-white/30 hover:border-white/25 hover:text-white hover:scale-103 active:bg-white/10 active:border-white/10 active:text-neutral-400 active:scale-97`}>
            <span className="aspect-square w-full p-2 block">
                {children}
            </span>
        </div>
    );
}

export default IconButton;