import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BookingTable from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BookingTable />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
