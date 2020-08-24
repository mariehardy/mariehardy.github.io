import React from 'react';
import pic1 from '../assets/images/IMG_8281-1.jpg';
import pic2 from '../assets/images/allmyplantslanding.jpg';
import pic3 from '../assets/images/monkandmonkey.jpg';
import ironLogo from '../assets/images/logo_ironhack_blue@3x.png';


import config from '../../config';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About me</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <p>
          I'm a Frontend developer with fullstack abilities. 
          I have a strong background in Graphic Design (web  & print) 
          and three years of experience as Quality Assurance Engineer 
          in an Agile environment. 
          <br /><br />
          <a href="https://drive.google.com/file/d/1owDyUME9is2mWMitQ2bZ_Op7OkQyFlw-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
            Take a look at my CV.
          </a>
          <hr />
          myStack: React, Redux, JavaScript, Typescript, Node.js, Mongo DB, CSS & HTML
          </p>
          <div className="image">
              <img src={ironLogo} alt="Ironhack" height="100px" width="100px" />
           </div>    
           <p>        
            Graduate of Ironhack Web Dev Bootcamp
          </p>
          <br />

          <section id="abouticons">
          <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      </section>
      
        </div>
      </section>

    </article>
  </Layout>
);

export default IndexPage;
