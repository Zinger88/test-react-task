import { SWITCH_UNIT } from '../../constants/actions';

export function switchUnit(checked) {
    return {
        type: SWITCH_UNIT,
        payload: checked
    };
}