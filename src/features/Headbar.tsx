import IconButton from "../components/IconButton";

function Headbar() {
    return (
        <div className={`w-screen h-[10%] min-h-15 flex flex-row items-center justify-between p-4`}>
            {/* Title */}
            <div className={`font-elms text-white text-2xl font-bold select-none`}>
                Lucid
            </div>

            {/* Settings */}
            <IconButton className={`text-neutral-300`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="aspect-square w-full p-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 10.27 7 3.34"/><path d="m11 13.73-4 6.93"/><path d="M12 22v-2"/><path d="M12 2v2"/><path d="M14 12h8"/><path d="m17 20.66-1-1.73"/><path d="m17 3.34-1 1.73"/><path d="M2 12h2"/><path d="m20.66 17-1.73-1"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m3.34 7 1.73 1"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="8"/></svg>
            </IconButton>
        </div>
    );
}

export default Headbar;