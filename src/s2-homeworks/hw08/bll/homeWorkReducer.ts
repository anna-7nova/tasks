import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedState = [...state];
            
            sortedState.sort((a, b) => {
                const compareResult = a.name.localeCompare(b.name);
                return action.payload === 'up' ? compareResult : -compareResult;
            });
            
            return sortedState;
        }
        case 'check': {

            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}
