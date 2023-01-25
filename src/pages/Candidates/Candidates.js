import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCandidate } from '../../store/actions/candidates';
import styles from './Candidates.module.css';

function Candidates() {
    const candidates = Object.entries(useSelector(state => state.candidates));
    const [ showAddCandidateForm, setShowCandidateForm ] = useState(false);
    const [ newCandidateName, setNewCandidateName ] = useState('');

    const dispatch = useDispatch();

    const handleAddingNewCandidate = () => {
        if (newCandidateName.length > 0) {
            dispatch(addCandidate(newCandidateName))
            setNewCandidateName('');
        } else {
            alert("Candidate's name should be at least 1 character long!")
        }
    }

    return <div className={styles.candidatesListContainer}>
        Candidates { !showAddCandidateForm && <button className={styles.addCandidateButton} onClick={() => setShowCandidateForm(true)}>
                + Add candidate
            </button>
        }
        {
            showAddCandidateForm && <div className={styles.newCandidateFormContainer}>
                <button className={styles.quitNewCandidateForm} onClick={() => setShowCandidateForm(false)}>X</button>
                Name: <input type="text" placeholder='Type in candidate`s name here' value={newCandidateName} onChange={(event) => setNewCandidateName(event.target.value)}/>
                <button className={styles.addCandidateButton} onClick={handleAddingNewCandidate}>Add</button>
            </div>
        }
        <div className={styles.candidatesListHeader}><div>Name</div><div>Votes received</div></div>
        {candidates.map(([id, candidate]) => <Candidate
            key={id}
            name={candidate.name}
            votesReceived={candidate.votesReceived}/>
        )}
    </div>
}

function Candidate({name, votesReceived}) {
    return <div className={styles.candidateItem}>
        <div className={styles.candidatesName}>{name}</div>
        <div className={styles.votesReceivedContainer}>
            <div className={styles.votesReceived}>{votesReceived}</div>
        </div>
    </div>;
}

export default Candidates;