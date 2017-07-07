import React from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import GoodsItem from './goods-item.jsx';

class GoodsCatalog extends React.Component {

    render() {
        return  (
            <div className="goods-catalog">
                <Table>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.goods.map( (row, index) => (
                            <GoodsItem goods={row} key={index} role={this.props.role}/>))}
                    </TableBody>
                </Table>
            </div>)

    }
}

export default GoodsCatalog;