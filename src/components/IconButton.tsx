import type { ReactNode } from 'react';

interface IconButtonProps {
    children: ReactNode;
}

function IconButton({ children }: IconButtonProps) {
    return (
        <div className={`aspect-square h-full rounded-md bg-white/35 flex flex-row items-center justify-center`}>
            {children}
        </div>
    );
}

export default IconButton;