"use client";
import classNames from "classnames";
import Coins from "@/app/ui/coins/coins";
import Nav from "@/app/ui/navbar/navbar";


export default function Page() {
    return (
        <div>
            <Nav />
            <Coins
                type="coins"
                value="Coins: "
                coin={90}
            />
        </div>
    );
}