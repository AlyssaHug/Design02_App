import Button from "@/app/ui/Buttons/Buttons";

function buttonPage() {
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
            <div className='sameSizedButtons'>
                <Button
                    value='Expenses'
                    color='nav'
                    imageSrc='navbar-icons/expense.svg'
                    alt='expense icon'
                />
                <Button
                    value='Expenses'
                    color='active'
                    imageSrc='navbar-active/expense-active.svg'
                    alt='expense icon'
                />
            </div>
            <div className='sameSizedButtons'>
                <Button
                    value='Goals'
                    color='nav'
                    imageSrc='navbar-icons/goal.svg'
                    alt='goal icon'
                />
                <Button
                    value='Goals'
                    color='active'
                    imageSrc='navbar-active/goal-active.svg'
                    alt='goal icon'
                />
            </div>
            <div className='sameSizedButtons'>
                <Button
                    value='Home'
                    color='nav'
                    imageSrc='navbar-icons/home-icon.svg'
                    alt='home icon'
                />
                <Button
                    value='Home'
                    color='active'
                    imageSrc='navbar-active/home-active.svg'
                    alt='home icon'
                />
            </div>
            <div className='sameSizedButtons'>
                <Button
                    value='Rewards'
                    color='nav'
                    imageSrc='navbar-icons/rewards.svg'
                    alt='rewards icon'
                />
                <Button
                    value='Rewards'
                    color='active'
                    imageSrc='navbar-active/rewards-active.svg'
                    alt='rewards icon'
                />
            </div>
            <div className='sameSizedButtons'>
                <Button
                    value='Profile'
                    color='nav'
                    imageSrc='navbar-icons/profile.svg'
                    alt='account icon'
                />
                <Button
                    value='Profile'
                    color='active'
                    imageSrc='navbar-active/profile-active.svg'
                    alt='account icon'
                />
            </div>
            <div className='sameSizedButtons'>
                <Button
                    color='cow'
                    imageSrc='navbar-icons/cow.svg'
                    alt='moomoo icon'
                />
                <Button
                    color='cow-active'
                    imageSrc='navbar-active/cow-active.svg'
                    alt='moomoo icon'
                />
            </div>
            <Button
                value='Overview'
                type='expense'
            />
            <Button
                value='Dismiss'
                type='secondary'
                size='caption'
            />
            <div className='sameSizedButtons'>
                <Button
                    imageSrc='/left_arrow.svg'
                    alt='arrow'
                />
                <Button
                    imageSrc='/right_arrow.svg'
                    alt='arrow'
                />
            </div>
            <div>By: Alyssa h.</div>
        </div>
    );
}

export default buttonPage;
