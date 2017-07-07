import * as types from '../constants/actionType';
import defaultGoods from '../default-values/goods.json';
import {loadInfo} from './info';

//действие получения товаров
export function receiveGoods(goods) {
    return {
        type: types.RECEIVE_GOODS,
        goods
    }
}


// действие добавление товара
export function addGoods(newGoods) {

    return function (dispatch) {
        //берем товары из localStorage
        var goodsLocal = JSON.parse(localStorage.getItem('goods'));
        //добавляем в список новый товар
        goodsLocal.push(newGoods);
        //записываем новые данные в localStorage
        localStorage.setItem('goods', JSON.stringify(goodsLocal));
        //вызываем действие загрузки информации
        dispatch(loadInfo());
        //вызываем действие получения товаров
        return dispatch(receiveGoods(goodsLocal));
    }

}

//действие удаления всех товаров
export function removeAllGoods() {

    return function (dispatch) {
        //берем товары из localStorage
        var goodsLocal = JSON.parse(localStorage.getItem('goods'));
        //проверка есть ли товары котрые нужно удалить
        if (!goodsLocal)
            return;
        // "удаляем" товары
        localStorage.setItem('goods', JSON.stringify([]));
        dispatch(loadInfo());
        return dispatch(receiveGoods([]));

    }

}

//действие удаление одного элемента
export function removeItemGoods(id) {
    return function (dispatch) {
        //берем товары из localStorage
        var goodsLocal = JSON.parse(localStorage.getItem('goods'));
        goodsLocal.forEach(function (item, index) {
            //проверяем если id удаляемого элемента будет равна id товара
            if (id == item.id) {
                //удаляем товар из списка
                goodsLocal.splice(index, 1);
                //обновляем данные
                localStorage.setItem('goods', JSON.stringify(goodsLocal));
                var goods = JSON.parse(localStorage.getItem('goods'));
                dispatch(loadInfo());
                return dispatch(receiveGoods(goods));
            }
        });
    }

}
//действие загрузки товаров
export function fetchGoods() {

    return function (dispatch) {
        //если localStorage пустой загружаем дефолтные товары
        if (!localStorage.getItem('goods')) {
            localStorage.setItem('goods', JSON.stringify(defaultGoods));
        }
        //обновляем данные
        var goods = JSON.parse(localStorage.getItem('goods'));
        return dispatch(receiveGoods(goods));
    }

}