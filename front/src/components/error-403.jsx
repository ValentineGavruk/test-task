import React from 'react';


class Error403 extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <img src="/media/image/error.png" className="error-image"/>
                <h1 className="error-text">Извините страница доступна только администратору</h1>
            </div>
        )

    }
}

export default Error403;