import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import ProgressBar from "./ui/ProgressBar/ProgressBar";

function page() {
    return (
        <div>
            <ToggleButton />
            <ProgressBar
                value='Goal 1: Touches Sandy'
                progress={80}
                goal={100}
            />
            <ProgressBar
                value='Goal 2: Touches Sandy'
                progress={30}
                goal={100}
                textColor='#4caf50'
            />
        </div>
    );
}
export default page;
