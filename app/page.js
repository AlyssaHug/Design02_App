import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import ProgressBar from "./ui/ProgressBar/ProgressBar";

function page() {
    return (
        <div>
            <ToggleButton />
            <ProgressBar
                name='Goal 1: Touches Sandy'
                value='100/100'
                type='complete'
            />
            <ProgressBar
                name='Goal 2: Check on Moomoo'
                value='0/100'
                type='empty'
            />
            <ProgressBar
                name='Goal 2: Check on Moomoo'
                value='10/100'
                type='empty'
                color='ten'
            />
        </div>
    );
}
export default page;
