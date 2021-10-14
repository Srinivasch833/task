import { User } from "../user";

export const SEARCH_USERS = 'Search Users';
export const INITIAL_DATA = 'Initial Data';

export const searchUsers = (payload: string) => ({type: SEARCH_USERS, payload});
export const bindInitialData = (payload: User[]) => ({type: INITIAL_DATA, payload});
