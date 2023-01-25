export const RECEIVE_CANDIDATES = 'RECEIVE_CANDIDATES';
export const ADD_CANDIDATE = 'ADD_CANDIDATE';

export function receiveCandidates(candidates) {
    return {
        type: RECEIVE_CANDIDATES,
        candidates
    }
}

export function addCandidate(newCandidateName) {
    return {
        type: ADD_CANDIDATE,
        newCandidateName
    }
}