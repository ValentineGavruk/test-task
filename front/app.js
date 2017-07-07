import React from 'react';
import ReactDOM from 'react-dom';
import { routes } from './routes.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
   routes,
    document.getElementById('content')
);
