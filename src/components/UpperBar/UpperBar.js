import { Link } from 'react-router-dom';
import styles from './UpperBar.module.css';

function UpperBar() {
    return <div className={styles.upperBar}>
        <Link to='/'className={styles.appName} >Voting App 1.0</Link>
        <div className={styles.menuOptionsContainer}>
            <Link to='/vote' className={styles.menuOption}>Vote!</Link>
            <Link to='/voters' className={styles.menuOption}>Voters</Link>
            <Link to='/candidates' className={styles.menuOption}>Candidates</Link>
        </div>
    </div>
}

export default UpperBar;