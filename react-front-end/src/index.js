import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(faTrash);
library.add(faPlus);

ReactDOM.render(<App />, document.getElementById('root'));
