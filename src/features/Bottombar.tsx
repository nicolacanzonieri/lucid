import WidgetButton from "../components/WidgetButton";

interface BottombarProps {
    isUserIdle?: boolean;
}

function Bottombar({ isUserIdle=false }: BottombarProps) {
    return (
        <div className={`w-full h-10 flex flex-row items-center justify-center p-0`}>
            <WidgetButton isUserIdle={isUserIdle} />
        </div>
    );
}

export default Bottombar;
