interface ModalProps {
    show?: boolean;
    title: string;
}

function Modal({ show, title } : ModalProps) {
    return (
        <div onClick={(e) => {e.stopPropagation()}} className={`w-[70%] h-[70%] flex flex-col p-p-1 bg-modal-bg-1 rounded-3xl border-modal-border-1 border-t border-b-[0.5px] text-modal-text-1 ${show ? `opacity-100` : `opacity-0`} transition-opacity duration-500`}>
            <span className="text-3xl font-bold font-elms">
                {title}
            </span>
        </div>
    );
}

export default Modal;