import { ADD_VOTER, RECEIVE_VOTERS, VOTE_FOR_CANDIDATE } from "../actions/voters";
import { v4 as uuid } from 'uuid';

export default function voters(state = {}, action) {
    switch (action.type) {
        case RECEIVE_VOTERS:
            return {
                ...state,
                ...action.voters
            };
        case ADD_VOTER:
            return {
                ...state,
                [uuid()]: {
                    name: action.newVoterName,
                    hasVoted: false
                }
            };
        case VOTE_FOR_CANDIDATE:
            return {
                ...state,
                [action.voterID]: {
                    ...state[action.voterID],
                    hasVoted: true
                }
            }
        default:
            return state;
    }
}