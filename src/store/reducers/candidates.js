import { ADD_CANDIDATE, RECEIVE_CANDIDATES } from "../actions/candidates";
import { VOTE_FOR_CANDIDATE } from "../actions/voters";
import { v4 as uuid } from 'uuid';

export default function candidates(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CANDIDATES:
            return {
                ...state,
                ...action.candidates
            };
        case ADD_CANDIDATE:
            return {
                ...state,
                [uuid()]: {
                    name: action.newCandidateName,
                    votesReceived: 0
                }
            };
        case VOTE_FOR_CANDIDATE:
            return {
                ...state,
                [action.candidateID]: {
                    ...state[action.candidateID],
                    votesReceived: state[action.candidateID].votesReceived + 1
                }
            }

        default:
            return state;
    }
}