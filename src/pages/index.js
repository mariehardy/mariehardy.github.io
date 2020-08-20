import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/IMG_8281-1.jpg';
import pic2 from '../assets/images/allmyplantslanding.jpg';
import pic3 from '../assets/images/monkandmonkey.jpg';
import ironLogo from '../assets/images/logo_ironhack_blue@3x.png';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="two">
              <a href="/#" className="button primary">
                Portfolio
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            A LITTLE ABOUT ME
          </h2>
          <p>
          Hey. I'm a Frontend developer with a background in Graphic Design and Quality Assurance.
          </p>
          <p>
          Stack: React, JavaScript, Node.js, Mongo DB, CSS & HTML
          </p>
            
            
            <div className="image">
              <img src={ironLogo} alt="Ironhack" height="100px" width="100px" />
           </div>    
           <p>        
            Graduate of Ironhack Web<br /><br />Dev Bootcamp
          </p>

          <Link to="/About">Want to know more?</Link>
          
        </header>
        {/* <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul> */}
      </div>
    </section>


    <section id="two" className="wrapper alt style2">
      <section className="spotlight">

      <div className="inner">
        <header className="major">
          <h2>
            PROJECTS
          </h2>
        </header>
      </div>
      
        <div className="image">
        <Link to="/Project1">
          <img src={pic1} alt="" />
        </Link>
        </div>
        <div className="content">
        <Link to="/Project1">
          <h2>
            ShapeIT
          </h2>
          <p>
          Social Fitness Platform to build healthy habits. 
          Contains 30-day video-based fitness program, nutrition 
          basics and the opportunity to make a donation to a good cause.
          </p>
        </Link>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
        <Link to="/Project2">
          <h2>
            all my plants
          </h2>
          <p>
          Virtual garden to keep track of all the plants you have at home 
          and their specific care requirements.
          </p>
          </Link>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
        <Link to="/Project3">
          <h2>
            Monk & Monkey
          </h2>
          <p>
          Retro game in which you are a monk who must bring 
          an offering to Buddha Keanu Reeves&mdash;watch out for the monkeys!
          </p>
          </Link>
        </div>
      </section>
    </section>

    {/* <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section> */}

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Contact me</h2>
          <p>
            Happy to have a chat about a new project idea, a job offer, or the weather.
          </p>
        </header>
        
					<h4>Form</h4>
					<form method="post" action="mailto:mariepascalehardy@gmail.com">
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall">
								<input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" />
							</div>
							<div className="col-6 col-12-xsmall">
								<input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" />
							</div>
							
							<div className="col-12">
								<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
							</div>
              <div className="col-6 col-12-small">
								<input type="checkbox" id="demo-copy" name="demo-copy" />
								<label htmlFor="demo-copy">Email me a copy</label>
							</div>
							<div className="col-6 col-12-small">
								<input type="checkbox" id="demo-human" name="demo-human" defaultChecked />
								<label htmlFor="demo-human">Not a robot</label>
							</div>
							<div className="col-12">
								<ul className="actions">
									<li><input type="submit" value="Send Message" className="primary" /></li>
									<li><input type="reset" value="Reset" /></li>
								</ul>
							</div>
              
						</div>
					</form>
        
      </div>
    </section>
  </Layout>
);

export default IndexPage;
