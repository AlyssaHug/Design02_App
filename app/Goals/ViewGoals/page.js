import Button from "@/app/ui/Buttons/Buttons";
import { GoalDetailed } from "@/app/ui/GoalCards/GoalCards";
import styles from "@/app/Goals/ViewGoals/styles.module.css";
import Nav from "@/app/ui/navbar/navbar";
import PageHeader from "@/app/ui/page-headers/page-header";

function page() {
    return (
        <div className={styles.page}>
            <Nav />
            <div className={styles.header}>
                <PageHeader
                    header='goal_header'
                    text='Current Goals'
                    type='header_title'
                />
            </div>
            <div className={styles.content}>
                <GoalDetailed
                    name='Goal 1'
                    title='Reduce spending by $60!'
                    type='General'
                    start='March 26, 2025'
                    end='April 27, 2025'
                    progress={90}
                    goal={100}
                    href='/Goals/ViewGoals/Goal1'
                />
                <GoalDetailed
                    name='Goal 2'
                    title='Add $50 to tuition fund!'
                    type='School'
                    start='March 1, 2025'
                    end='march 31, 2025'
                    progress={60}
                    goal={100}
                    href='/Goals/ViewGoals/Goal2'
                />
                <GoalDetailed
                    name='Goal 3'
                    title='Save for a car ($39,000)!'
                    type='personal'
                    start='january 1, 2025'
                    end='january 1, 2026'
                    progress={30}
                    goal={100}
                    textColor='#4caf50'
                    href='/Goals/ViewGoals/Goal3'
                />
            </div>
        </div>
    );
}

export default page;
