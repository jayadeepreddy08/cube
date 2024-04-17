import React from 'react';
import './grid.css';

const CustomerList = ({ customers, setSelectedCustomer, selectedCustomerId }) => {
  return (
    <div className="customer-list">
      {customers.map(customer => (
        <div 
          key={customer.id} 
          onClick={() => setSelectedCustomer(customer)} 
          className={`customer-card ${selectedCustomerId === customer.id ? 'selected-card' : ''}`}
          
        >
          <h3>Customer {customer.id}</h3>
          <h3> {customer.title}{customer.name}</h3>
          
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
