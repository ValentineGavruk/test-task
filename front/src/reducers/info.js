import {RECEIVE_INFO} from '../constants/actionType';
const defaultInfo = {
    goodsLength: '__',
    sumPrice: '__',
    averagePrice: '__'
};

export default function Goods (state = defaultInfo, action){
    switch (action.type) {
        case RECEIVE_INFO:
            return action.info;
        default:
            return state
    }
};