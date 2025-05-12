import Nav from "@/app/ui/navbar/navbar";
import { SettingButton } from "@/app/ui/Buttons/Buttons";
export default function Page() {
    return (
        <div>
            <Nav />
            <h1>Hi there user!</h1>
            <div></div>
            <SettingButton
                value='Settings'
                imageSrc='right_arrow.svg'
                type='settings'
            />
        </div>
    );
}
