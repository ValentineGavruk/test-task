import React from 'react';
import {connect} from 'react-redux'
import Header from '../components/header.jsx';
import Info from '../components/info.jsx';
import AddGoodsForm from '../components/add-goods-form.jsx';
import GoodsCatalog from '../components/goods-catalog.jsx';
import Error403 from '../components/error-403.jsx';
import {fetchGoods, loadInfo} from '../actions'
import {ADMIN} from '../constants/user-role';

class AddGoods extends React.Component {

    componentWillMount() {
        store.dispatch(fetchGoods());
        store.dispatch(loadInfo());
    }

    render() {
        if (this.props.userRole === ADMIN) {
            return (
                <div className="">
                    <Header files={this.props.header} role={this.props.userRole}/>
                    <Info info={this.props.info} role={this.props.userRole}/>
                    <AddGoodsForm goods={this.props.goods}/>
                    <GoodsCatalog goods={this.props.goods} role={this.props.userRole}/>
                </div>)
        } else {
            return (
                <Error403/>
            )
        }

    }
}


function mapStateToProps(state) {
    return {
        goods: state.Goods,
        info: state.Info,
        userRole: state.UserRole
    }
}


export default connect(mapStateToProps)(AddGoods);
