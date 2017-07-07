import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {removeAllGoods} from '../actions'
import {ADMIN} from '../constants/user-role';

class Info extends React.Component {

    constructor(props) {
        super(props);

        this.deleteGoods = this.deleteGoods.bind(this);
    }


    deleteGoods(e) {
        store.dispatch(removeAllGoods());
    }

    render() {

        return (
            <div className="info">
                <Menu>
                    <MenuItem primaryText="общее кол-во товаров:" secondaryText={this.props.info.goodsLength}
                              disabled={true} style={{color: 'black'}}/>
                    <MenuItem primaryText="сумма цен всех товаров:" secondaryText={this.props.info.sumPrice}
                              disabled={true} style={{color: 'black'}}/>
                    <MenuItem primaryText="cредняя цена:" secondaryText={this.props.info.averagePrice} disabled={true}
                              style={{color: 'black'}}/>
                    <Divider />
                    {this.props.role === ADMIN ? <FlatButton
                        label="Удалить все товары"
                        onClick={this.deleteGoods}
                    /> : null}

                </Menu>
            </div>)

    }
}

export default Info;