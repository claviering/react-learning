import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from '@/router/router.jsx';

ReactDOM.render(<Router/>, document.getElementById('root'));
registerServiceWorker();
