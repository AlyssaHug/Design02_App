import Button from "@/app/ui/Button/Button";

function ProductPage() {
    return (
        <div>
            <div>Button Styles for MoolahMate</div>
            <Button
                value='View More'
                type='view'
            />
            <Button
                value='Undo'
                type='outline'
            />
            <Button
                value='Create Goal'
                type='primary'
            />
            <Button
                value='Close'
                type='close'
            />
            <Button
                value='Check on MooMoo'
                type='popup'
            />
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
