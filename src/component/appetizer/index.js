import React from 'react';

class Appetizer extends React.Component {
  render() {
    return (
    <div className="appetizer">
      <h3>Appetizer</h3>
      <img src="../lib/imgs/Appetizers.png"/>

      <h3>Soup</h3>
      <p>Served with your choice of chicken, pork, tofu, or veggies. Please add $2 for beef or prawns/seafood $4. </p>
      <img/>

      <h3>Salad</h3>
      <img/>
    </div>
    );
  }
}

export default Appetizer;
