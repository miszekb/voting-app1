import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVoter } from '../../store/actions/voters';
import styles from './Voters.module.css';

function Voters() {
    const voters = Object.entries(useSelector(state => state.voters));
    const [ showAddVoterForm, setShowAddVoterForm ] = useState(false);
    const [ newVoterName, setNewVoterName ] = useState('');

    const dispatch = useDispatch();

    const handleAddingNewVoter = () => {
        if (newVoterName.length > 0) {
            dispatch(addVoter(newVoterName));
            setNewVoterName('');
        } else {
            alert("Voter's name should be at least 1 character long!")
        }
    }

    return <div className={styles.votersListContainer}>
        Voters { !showAddVoterForm && <button className={styles.addVoterButton} onClick={() => setShowAddVoterForm(true)}>
                + Add voter
            </button>
        }
        {
            showAddVoterForm && <div className={styles.newCandidateFormContainer}>
                <button className={styles.quitNewCandidateForm} onClick={() => setShowAddVoterForm(false)}>X</button>
                Name: <input type="text" placeholder='Type in voter`s name here' value={newVoterName} onChange={(event) => setNewVoterName(event.target.value)}/>
                <button className={styles.addVoterButton} onClick={handleAddingNewVoter}>Add</button>
            </div>
        }
        <div className={styles.votersListHeader}><div>Name</div><div>Has voted?</div></div>
        {voters.map(([id, voter]) =>
            <Voter
                key={id}
                name={voter.name}
                hasVoted={voter.hasVoted}
            />
        )}
    </div>
}

function Voter({name, hasVoted}) {
    return <div className={styles.voterItem}>
        <div className={styles.voterName}>{name}</div>
        <div className={styles.votingStatusContainer}>
            <div className={hasVoted ? styles.hasVoted : styles.hasNotVoted}>{hasVoted ? 'Yes': 'No'}</div>
        </div>
    </div>;
}

export default Voters;