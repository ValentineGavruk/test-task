import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router';

import {removeAllGoods} from '../actions'

class HeaderMenu extends React.Component {

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
                <IconMenu
                    iconButtonElement={<IconButton
                        style={{fontSize: '20px'}}
                    >
                        <FontAwesome
                            className='fa fa-bars'
                            name='fa-bars'
                        /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                    <MenuItem>
                        <Link to='/' style={{color: 'black'}}>Каталог Товаров</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/add-goods' style={{color: 'black'}}>Добавить Товар</Link>
                    </MenuItem>
                </IconMenu>
            </div>)

    }
}

export default HeaderMenu;