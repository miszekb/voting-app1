export const RECEIVE_VOTERS = 'RECEIVE_VOTERS';
export const VOTE_FOR_CANDIDATE = 'VOTE_FOR_CANDIDATE';
export const ADD_VOTER = 'ADD_VOTER';

export function receiveVoters(voters) {
    return {
        type: RECEIVE_VOTERS,
        voters
    };
};

export function addVoter(newVoterName) {
    return {
        type: ADD_VOTER,
        newVoterName
    };
};

export function vote(voterID, candidateID) {
    return {
        type: VOTE_FOR_CANDIDATE,
        voterID,
        candidateID
    };
};
