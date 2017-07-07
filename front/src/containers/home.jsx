import React from 'react';
require('../less/main.less');
import {connect} from 'react-redux'
import Header from '../components/header.jsx';
import Info from '../components/info.jsx';
import GoodsCatalog from '../components/goods-catalog.jsx';
import {fetchGoods, loadInfo} from '../actions'

class App extends React.Component {

    componentWillMount() {
        store.dispatch(fetchGoods());
        store.dispatch(loadInfo());
    }

    render() {
        return (
            <div className="">
                <Header files={this.props.header} role={this.props.userRole}/>
                <Info info={this.props.info} role={this.props.userRole}/>
                <GoodsCatalog goods={this.props.goods} role={this.props.userRole}/>
            </div>)
    }
}


function mapStateToProps(state) {
    return {
        goods: state.Goods,
        info: state.Info,
        userRole: state.UserRole
    }
}


export default connect(mapStateToProps)(App);
