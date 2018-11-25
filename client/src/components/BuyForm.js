import React from 'react';

const BuyForm = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.userBalance}</h1>
      <h1>Form</h1>
    </div>
  );
};

export default BuyForm;
