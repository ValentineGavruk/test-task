import React from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import FontAwesome from 'react-fontawesome';
import {removeItemGoods} from '../actions';
import {ADMIN} from '../constants/user-role';


class GoodsItem extends React.Component {
    constructor(props) {
        super(props);

        this.deleteGoods = this.deleteGoods.bind(this);
    }

    deleteGoods(e) {
        store.dispatch(removeItemGoods(this.props.goods.id));
    }

    render() {

        return (
            <TableRow className="goods-catalog__row-item">
                <TableRowColumn
                    className="goods-catalog__row-left"
                >
                    <div className="goods-catalog__row__image"
                         style={{backgroundImage: 'url(' + this.props.goods.picture + ')'}}/>
                </TableRowColumn>
                <TableRowColumn
                    className="goods-catalog__row-center"
                >
                    <div className="goods-catalog__row__title">{this.props.goods.title}</div>
                    <div className="goods-catalog__row__description"><p>{this.props.goods.description}</p></div>
                </TableRowColumn>
                <TableRowColumn
                    className="goods-catalog__row-right"
                    style={{fontSize: '25px'}}
                >
                    {this.props.role === ADMIN ? <FontAwesome
                        className='fa fa-times'
                        name='fa-times'
                        onClick={this.deleteGoods}
                    /> : null}
                    {this.props.goods.price}
                </TableRowColumn>
            </TableRow>)

    }
}

export default GoodsItem;