import type { ReactNode } from 'react';

interface IconButtonProps {
    children: ReactNode;
    isUserIdle?: boolean;
    onClick?: () => void;
    ariaLabel?: string;
}

function IconButton({ children, isUserIdle=false, onClick, ariaLabel }: IconButtonProps) {
    return (
        <div onClick={onClick} aria-label={ariaLabel} className={`aspect-square h-full ${isUserIdle ? `text-transparent bg-transparent border-transparent` : `text-btn-text-1 bg-btn-bg-1 border-btn-border-1`} rounded-xl border-t border-b-[0.5px] flex flex-row items-center justify-center transition-all ease-in-out ${isUserIdle ? `duration-1000` : `duration-150`} hover:bg-btn-hover-bg-1 hover:border-btn-hover-border-1 hover:text-btn-hover-text-1 hover:scale-103 active:bg-btn-active-bg-1 active:border-btn-active-border-1 active:border-t-0 active:border-b-0 active:border-l-[0.5px] active:border-r-[0.5px] active:text-btn-active-text-1 active:scale-97`}>
            <span className="aspect-square w-full p-p-3 block">
                {children}
            </span>
        </div>
    );
}

export default IconButton;