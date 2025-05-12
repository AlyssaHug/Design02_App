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
        { id: 1,imageSrc: "/moomoo-dressup/bow.png", value: "Bow" },
        { id: 2,imageSrc: "/moomoo-dressup/sunglasses.png", value: "Sunglasses" },
        { id: 3,imageSrc: "/moomoo-dressup/moustache.png", value: "Dapper" },
        { id: 4,imageSrc: "/Accessories/cat.svg", value: "Cat" },
        { id: 5,imageSrc: "/Accessories/dog.svg", value: "Dog" },
        { id: 6,imageSrc: "/Accessories/dress.svg", value: "Dress" },
        { id: 7,imageSrc: "/Accessories/flowercrown.svg", value: "Flower Crown" },
        { id: 8,imageSrc: "/Accessories/icecream.svg", value: "Ice Cream" },
        { id: 9,imageSrc: "/Accessories/suit.svg", value: "Suit" },
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