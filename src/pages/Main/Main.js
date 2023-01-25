import styles from './Main.module.css';

function Main() {
    return <div className={styles.mainPage}>
        <div className={styles.appDescriptionContainer}>
            <h2>Hello user!</h2>
            <p>With this app you can:</p>
            <ul>
                <li>Vote for candidates</li>
                <li>View voters & candidates</li>
                <li>Add voters & candidates</li>
            </ul>
        </div>
    </div>;
}

export default Main;