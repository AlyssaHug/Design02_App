import Button from "@/app/ui/Buttons/Buttons";
import Image from "next/image";

function productPage() {
    return (
        <div>
            <div>Button Styles for MoolahMate</div>
            <Button
                value='View More'
                type='view'
            />
            <br />
            <Button
                value='Undo'
                type='outline'
            />
            <br />
            <Button
                value='Create Goal'
                type='primary'
            />
            <br />
            <Button
                value='Close'
                type='close'
            />
            <br />
            <Button
                value='Check on MooMoo'
                color='light-blue'
            />
            <br />
            <Button
                value='Sign In'
                style='round'
                color='dark'
            />
            <Button
                value='Sign Up Now!'
                color='light'
                style='round'
            />
            <br />
            <Button
                value='Redeem'
                type='primary'
            />
            <Button
                value='Complete Goal First'
                type='secondary'
            />
            <Button
                value='Buy 60 Coins'
                type='shop'
                style='round'
            />
            <Button
                value='Already Owned'
                color='dark'
                style='round'
            />

            <div className='sameSizedButtons'>
                <Button
                    value='Create Goal'
                    type='primary'
                />
                <Button
                    value='Close'
                    type='close'
                />
            </div>
            <Button
                value='Expenses'
                color='nav'
            />
            <Button
                value='Goals'
                color='nav'
            />
            <Button
                value='Home'
                color='nav'
            />
            <Button
                value='Rewards'
                color='nav'
            />
            <Button
                value='Profile'
                color='nav'
            />
            <Button
                value='Overview'
                type='expense'
            />
            <Button
                value='Dismiss'
                type='secondary'
                size='caption'
            />
            <div>By: Alyssa h.</div>
        </div>
    );
}

export default productPage;
