import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

library.add(faTrash);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
