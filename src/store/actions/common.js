import mockedData from "../../initialMockedData.json";
import { receiveCandidates } from "./candidates";
import { receiveVoters } from "./voters";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(receiveVoters(mockedData.voters));
        dispatch(receiveCandidates(mockedData.candidates));
    };
};
