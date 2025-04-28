import Button from "@/app/ui/Buttons/Buttons";

function ProductPage() {
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
                type='popup'
            />
            <br />
            <Button
                value='Sign In'
                size='long'
                color='dark'
            />
            <Button
                value='Sign Up Now!'
                size='long'
                color='light'
            />
            <div>By: Alyssa h.</div>
        </div>
    );
}

export default ProductPage;
