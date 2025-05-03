"use client";

import Nav from "@/app/ui/navbar/navbar";
import Slider from "@/app/ui/slider/slider";
import Dressup from "./ui/dressup/dressup";
import Goalscarousel from "@/app/ui/goalscarousel/goalscarousel";

function Page() {
    return (
        <>
            <Slider />
            <Dressup/>
            <Goalscarousel/>
        </>
    );
}

export default Page;