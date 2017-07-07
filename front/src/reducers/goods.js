import {RECEIVE_GOODS} from '../constants/actionType';

export default function Goods (state = [], action){
    switch (action.type) {
        case RECEIVE_GOODS:
            return action.goods;
        default:
            return state
    }
};