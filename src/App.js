import React, { useState } from 'react';
import './App.css';
import CustomerDetails from './CustomerDetails';
import CustomerList from './CustomerList';
import { customers } from './Data';

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="App">
      <h1 className='intro'>Cube React Assignment</h1>
      <h4 className='intro'>By: Nunepalli Jayadeep Reddy</h4>
      <div className='mApp'>
      <div className="left-side">
      
      <CustomerList customers={customers} setSelectedCustomer={setSelectedCustomer} selectedCustomerId={selectedCustomer ? selectedCustomer.id : null} />

      </div>
      <div className="right-side">
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
      </div>
    </div>
  );
};

export default App;

