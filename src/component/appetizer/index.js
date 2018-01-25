import React from 'react';

class Appetizer extends React.Component {
  render() {
    return (
      <div className="appetizer">
        <h3>Appetizers</h3>
        <h2>A1 Spring Roll - deep fried chopped vegetables and taros rolled in a wheat wrapper, served with a plum sauce. $7</h2>
        <h2>A2 Fresh Roll - mixed vegetable, thin noodles, tofu wrapped in rice wrapper, served with a ginger sauce. $7/Prawns $9</h2>
        <h2>A3 Cubed Tofu - fried crispy tofu filled with pork and vegetable served with our house special soy sauce</h2>
        <h2>A4 Pot Sticker - fried dumpling filled with pork and vegetables served with our house made soy sauce</h2>
        <h2>A5 Prawn in a Blanket - golden deep fried prawns in wheat wrappers, served with a sweet chili sauce</h2>
        <h2>A6 Crab Delight - deep fried crab meat & cream cheese in a wonton wrapper, served with a sweet chili sauce</h2>
        <h2>A7 Chicken Wings - marinated deep fried chicken wings, served with a cucumber-sweet chili sauce</h2>
        <h2>A8 Chicken Satay - marinated chicken breast in yellow curry powder and herbs served with a peanut sauce</h2>
        <h2>A9 Moo Yang - grilled marinated pork tender in Thai herb and served with Thai style sauce</h2>
        <h2>A10 Sai Oua (Homemade Thai Sausage) - grilled ground pork, red chili paste and Thai herb sausage, served with cabbage and fresh ginger</h2>

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
