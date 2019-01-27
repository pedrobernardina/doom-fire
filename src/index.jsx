import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import TableImplementation from './Implementations/Table/Table';

const App = () => (
  <div className='container'>
    <TableImplementation />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
