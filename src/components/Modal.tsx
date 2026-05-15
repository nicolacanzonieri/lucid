function Modal() {
    return (
        <div onClick={(e) => {e.stopPropagation()}} className="w-[70%] h-[70%] bg-btn-bg-1 rounded-3xl border-btn-border-1 border-t border-b-[0.5px]">
          
        </div>
    );
}

export default Modal;