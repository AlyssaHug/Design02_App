import classNames from "classnames";
import { Quicksand, Libre_Franklin } from "next/font/google";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "@/app/ui/dressup/dressup.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});
const quicksand = Quicksand({
    variable: "--font-quicksand",
});

//hi pp
export default function Dressup() {
    const accessories = [
        { imageSrc: "/moomoo-dressup/bow.png", value: "Bow" },
        { imageSrc: "/moomoo-dressup/sunglasses.png", value: "Sunglasses" },
        { imageSrc: "/moomoo-dressup/moustache.png", value: "Dapper" },
        { imageSrc: "/Accessories/cat.svg", value: "Cat" },
        { imageSrc: "/Accessories/dog.svg", value: "Dog" },
        { imageSrc: "/Accessories/dress.svg", value: "Dress" },
        { imageSrc: "/Accessories/flowercrown.svg", value: "Flower Crown" },
        { imageSrc: "/Accessories/icecream.svg", value: "Ice Cream" },
        { imageSrc: "/Accessories/suit.svg", value: "Suit" },
    ];

    return (
        <div className={styles.dressup}>
            {accessories.map((accessory, index) => (
                <div
                    key={accessory.value}
                    className={classNames({
                        [styles.textfix]: index < 2,  // personal note for moi, this is because of the dumb styling of the svgs :(
                    })}
                >
                    <Button
                        imageSrc={accessory.imageSrc}
                        value={accessory.value}
                        color="light-blue"
                        customClass={classNames({
                            [styles.dressupButton]: index < 3, // as well as this
                            [styles.large]: index >= 3, // and this BECAUSE I HAVE TO MAKE SURE THAT THESE STYLES APPLY BECAUSE OF DIFFERENT SVG SIZING AAAA
                        })}
                    />
                </div>
            ))}
        </div>
    );
}