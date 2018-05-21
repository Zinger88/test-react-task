import { SWITCH_UNIT } from '../../constants/actions';

const initialState = {
	check: false
}

export default function handle(state=initialState, action) {
    switch(action.type) {
        case SWITCH_UNIT: 
            return  {
                ...state,
                check: state.checked
 
            };
        default: 
            return state;
    }
}