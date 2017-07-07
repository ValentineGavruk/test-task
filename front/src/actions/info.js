import * as types from '../constants/actionType';

//действие получения информации
export function receiveInfo(info) {
    return {
        type: types.RECEIVE_INFO,
        info
    }
}

// действие загрузки информации
export function loadInfo() {
    return function (dispatch) {
        //берем товары из localStorage
        var goodsLocal = JSON.parse(localStorage.getItem('goods'));
        var info = {};

        if (goodsLocal.length > 0){
            //считаем сумму всех  товаров
            var sumPrice = goodsLocal.reduce(function (sum, current) {
                return sum + current.price;
            }, 0);

            // коллиество товаров
            info.goodsLength = goodsLocal.length;
            //сумма всех товаров
            info.sumPrice = sumPrice;
            //средняя цена
            info.averagePrice = (sumPrice / goodsLocal.length).toFixed(2);
        }else {
            info = {
                goodsLength: 0,
                sumPrice: 0,
                averagePrice: 0
            }
        }
        return dispatch(receiveInfo(info));
    }
}