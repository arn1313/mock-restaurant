import React from 'react';

class Appetizer extends React.Component {
  render() {
    return (
      <div className="appetizer">
        <h3>Appetizer</h3>
        <img src="./src/imgs/Appetizers.png" alt="A list of appetizers available at this site"/>

        <h3>Soup</h3>
        <p>Served with your choice of chicken, pork, tofu, or veggies. Please add $2 for beef or prawns/seafood $4. </p>
        <img src="./src/imgs/Soup.png"/>

        <h3>Salad</h3>
        <img src="./src/imgs/Salads.png"/>
      </div>
    );
  }
}

export default Appetizer;
