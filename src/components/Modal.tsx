interface ModalProps {
    isAnimating: boolean;
    title: string;
    enterDelay?: string;
    exitDelay?: string;
}

function Modal({ isAnimating, title, enterDelay="0ms", exitDelay="0ms" } : ModalProps) {
    return (
        <div onClick={(e) => {e.stopPropagation()}} className={`w-[70%] h-[70%] flex flex-col p-p-1 bg-modal-bg-1 rounded-3xl border-modal-border-1 border-t border-b-[0.5px] text-modal-text-1 transition-all ease-in-out duration-500 ${isAnimating ? 'opacity-100 blur-0' : 'opacity-0 blur-3xl'}`}
            style={{ 
                transitionDelay: isAnimating ? enterDelay : exitDelay 
            }}
        >
            <span className="text-3xl font-bold font-elms">
                {title}
            </span>
        </div>
    );
}

export default Modal;