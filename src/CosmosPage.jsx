import React from 'react';
// Import the images (adjust paths as needed for your project structure)
import starfieldImg from './assets/1140x641.jpg';              // starfield nebula image
import galaxyImg from './assets/NGC_4414_(NASA-med).jpeg';     // spiral galaxy image
import solarSystemImg from './assets/Solar_System_true_color.jpeg'; // solar system image

function CosmosPage() {
  return (
    <div className="cosmos-page">
      {/* Introduction Section */}
      <h1>The Cosmos</h1>
      <p className="cosmos-intro">
        Exploring the wonders of space – from brilliant nebulae and vast galaxies to our own solar system.
      </p>

      {/* Section 1: Nebulae and Stars */}
      <section className="cosmos-section cosmos-nebula">
        {/* Text on left, Image on right */}
        <div className="cosmos-text">
          <h2>Nebulae – Stellar Nurseries</h2>
          <p>
            Nebulae are vast clouds of gas and dust in space, often spanning light-years. These colorful clouds  [oai_citation:5‡web-designlondon.co.uk](https://www.web-designlondon.co.uk/understanding-visual-hierarchy-web-design/#:~:text=Proximity) 
            are the birthplaces of new stars, glowing softly as stellar nurseries in the cosmos.
          </p>
        </div>
        <img src={starfieldImg} alt="A blue-purple nebula starfield in deep space" className="cosmos-image" />
      </section>

      {/* Section 2: Galaxies */}
      <section className="cosmos-section cosmos-galaxies">
        {/* Image on left, Text on right */}
        <img src={galaxyImg} alt="Spiral galaxy NGC 4414 with a bright core and swirling arms" className="cosmos-image" />
        <div className="cosmos-text">
          <h2>Galaxies – Island Universes</h2>
          <p>
            Galaxies are immense collections of stars, gas, and dark matter bound together by gravity. Each galaxy, like NGC 4414 shown here, 
            can contain billions of stars. These island universes dot the cosmos, each illuminating the depths of space with its starlight.
          </p>
        </div>
      </section>

      {/* Section 3: Our Solar System */}
      <section className="cosmos-section cosmos-solar-system">
        {/* Text on left, Image on right */}
        <div className="cosmos-text">
          <h2>Our Solar System – Home in Space</h2>
          <p>
            Our solar system is our cosmic neighborhood – a single star (the Sun) with its family of planets, moons, and asteroids. 
            From the Sun’s blazing corona to distant Neptune’s blue haze, the solar system gives us a firsthand taste of the cosmos’ scale and beauty.
          </p>
        </div>
        <img src={solarSystemImg} alt="The Sun and planets of our solar system in true color, in a line" className="cosmos-image" />
      </section>
    </div>
  );
}

export default CosmosPage;