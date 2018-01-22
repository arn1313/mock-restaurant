import React from 'react';
import './_gallery.scss';


class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <h3>Treats</h3>

        <ul className="images">

          <li><p>Avacado Curry</p> <img src="src/imgs/AvocadoCurry.jpeg" alt="Avacado Curry"/></li>

          <li><p>Kao Soi</p><img src="src/imgs/KaoSoi.jpeg" alt="Kao Soi noodles"/></li>

          <li><p>Moo Yang</p><img src="src/imgs/MooYang.jpeg" alt="Moo Yang"/></li>

          <li><p>Orange Chicken</p><img src="src/imgs/OrangeChicken.jpeg" alt="Orange Chicken"/></li>

          <li><p>Phad See Ew</p><img src="src/imgs/PhadSeeEw.jpeg" alt="Phad See Ew"/></li>

          <li><p>Potstickers</p><img src="src/imgs/potstickers.jpeg" alt="Potstickers"/></li>

          <li><p>Shrimp Pad Thai</p><img src="src/imgs/ShrimpPadThai.jpeg" alt="Shrimp Pad Thai"/></li>

          <li><p>Swimming Rama</p><img src="src/imgs/SwimmingRama.jpeg" alt="Swimming Rama"/></li>

          <li><p>Tom Kha Soup</p><img src="src/imgs/TomKhaSoup.jpeg" alt="Tom Kha Soup"/></li>

          <li><p>Tom Yum Noodle Soup</p><img src="src/imgs/TomYumNoodleSoup.jpeg" alt="Tom Yum Noodle Soup"/></li>
        </ul>
      </div>
    );
  }
}

export default Gallery;
