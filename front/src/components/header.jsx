import React from 'react';
import AppBar from 'material-ui/AppBar';
import HeaderMenu from './header-menu.jsx';
import FontAwesome from 'react-fontawesome';

const LogoImg = require('../../../public/media/image/logo.png');
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar
                    title={<img src={LogoImg} className="header-logo"/>}
                    iconElementLeft={<HeaderMenu/>}
                >
                    <div className="header-user">
                        <FontAwesome
                            className='fa fa-user header-user-logo'
                            name='fa-user'
                        />
                        {this.props.role}
                    </div>
                </AppBar>

            </div>)

    }
}

export default Header;