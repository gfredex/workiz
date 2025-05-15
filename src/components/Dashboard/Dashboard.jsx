import React from 'react';
import styles from './Dashboard.module.css';
import Content from '../Content/Content';
import Todolist from '../Todolist/Todolist';

function Dashboard() {
    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>Workiz</h1>
                <div className={styles.selectButton}>
                    <span className={styles.text}>Кнопка выбора действия</span>
                    <span className={styles.arrow}>&#9660;</span>
                </div>
            </div>
            <div className={styles.main}>
                <Todolist />
                <Content />
            </div>
        </div>
    )
}

export default Dashboard