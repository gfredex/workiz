import React from 'react';

import styles from './Dashboard.module.css';
import Content from '../Content/Content';
import Todolist from '../Todolist/Todolist';

function Dashboard() {

    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <h1 className={styles.title}>Workiz</h1>
                <div className={styles.selectButton} >
                    <span className={styles.text}>Выбор</span>
                    <span className={styles.arrow}>&#9660;</span>
                    <div className={styles.selectlist}>
                        <p>Item1</p>
                        <p>Item2</p>
                        <p>Add task</p>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                <Todolist />
                <Content />
            </div>
        </div >
    )
}

export default Dashboard