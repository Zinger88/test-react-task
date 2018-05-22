import { SWITCH_UNIT } from '../../constants/actions';

const initialState = {
	checked: false
}

export default function handle(state=initialState, action) {
    switch(action.type) {
        case SWITCH_UNIT: 
            return  {
                ...state,
                checked: action.payload
 
            };
        default: 
            return state;
    }
}