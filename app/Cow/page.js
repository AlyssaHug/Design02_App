"use client";
import CowPage from "./Cow/cow";
import Moomoo from "./ui/moomoo/moomoo";
import styles from "@/app/Cow/styles.module.css"

export default function Page() {
    return (
        <div>
        <div className={styles.moo}>
            <Moomoo
            size="interaction"
            src="/moomoonormal.svg"
            />
            </div>
      <CowPage/>
      </div>
    );
}

