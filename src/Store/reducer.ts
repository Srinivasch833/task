import { User } from "../user";
import { INITIAL_DATA, SEARCH_USERS } from "./actions";

const initailState: RootState = {
    rootData: [],
    filteredData: []
}

export interface RootState {
    rootData: User[];
    filteredData: User[];
}

interface Action {
    type: string;
    payload?: any;
}

export const rootReducer = (state = initailState, action: Action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return ({ ...state, filteredData: action.payload ? state.rootData.filter((user) => user.name.toLowerCase().includes(action.payload as string)) : state.rootData })
        case INITIAL_DATA:
            return ({ ...state, rootData: action.payload, filteredData: action.payload })
        default:
            return state
    }
}