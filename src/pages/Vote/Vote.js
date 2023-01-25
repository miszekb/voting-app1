import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { vote } from '../../store/actions/voters';
import styles from './Vote.module.css';

const renderDropdownItem = (id, name) => {
    return <option key={id} value={id} className={styles.dropdownOption}>
        {name}
    </option>;
}

const changeToArray = (peopleCollection) => Object.entries(peopleCollection);

function Vote() {
    const [ votersArray, votersMap ] = useSelector(state => [changeToArray(state.voters), state.voters]);
    const candidates = useSelector(state => changeToArray(state.candidates));
    const dispatch = useDispatch();

    const voterSelector = useRef();
    const candidateSelector = useRef();

    const handleVoteSumbit = () => {
        const chosenVoterID = voterSelector.current.value;
        const chosenCandidateID = candidateSelector.current.value;

        const { name, hasVoted } = votersMap[chosenVoterID];

        if (!hasVoted) {
            dispatch(vote(chosenVoterID, chosenCandidateID));
            alert(`${name} voted successfuly!`);
        } else {
            alert('This user has already voted!');
        }
    };

    return <div className={styles.votingFormContainer}>
        <h2>Vote</h2>
        <div className={styles.votingOptionsContainer}>
            I am
            <select
                className={styles.dropdown}
                ref={voterSelector}
            >
                { votersArray.map(([id, voter]) => renderDropdownItem(id, voter.name)) }
            </select>
            and I vote for
            <select
                className={styles.dropdown}
                ref={candidateSelector}
            >
                { candidates.map(([id, candidate]) => renderDropdownItem(id, candidate.name)) }
            </select>
        </div>
        <button className={styles.submitButton} onClick={handleVoteSumbit}>Submit</button>
    </div>
}

export default Vote;