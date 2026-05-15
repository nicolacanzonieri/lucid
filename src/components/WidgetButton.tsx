interface WidgetButtonPros {
    isUserIdle?: boolean
}

function WidgetButton({ isUserIdle=false }: WidgetButtonPros) {
    return (
        <div className={`w-50 h-full pt-p-1`}>
            <div className={`w-full h-full flex flex-col items-center justify-center rounded-t-xl border-t ${isUserIdle ? `bg-transparent border-transparent text-transparent backdrop-blur-none` : `bg-btn-bg-1 border-btn-border-1 text-btn-text-1 backdrop-blur-xl`} transition-all ease-in-out ${isUserIdle ? `duration-1000` : `duration-150`} hover:bg-btn-hover-bg-1 hover:border-btn-hover-border-1 hover:text-btn-hover-text-1 hover:scale-101 active:bg-btn-active-bg-1 active:border-btn-active-border-1 active:border-t-0 active:border-l-[0.5px] active:border-r-[0.5px] active:text-btn-active-text-1 active:scale-97`}>
                {/* <span className={`text-xs uppercase font-extralight select-none`}>
                    Widgets
                </span> */}
                <span className="aspect-square h-full p-0 block">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </span>
            </div>
        </div>
    )
}

export default WidgetButton;