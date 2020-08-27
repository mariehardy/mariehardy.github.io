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
            <Scroll type="id" element="projects">
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
            About Me
          </h2>
          <p className="align-left">
          I'm a Frontend developer with fullstack abilities. 
          My background in Graphic Design and Quality Assurance 
          Engineering gave me a razor-sharp eye for detail 
          and an understanding of Agile methodology. 
          Eager to join a team where I can contribute 
          with my creative and quality-oriented approach. 
          </p>
          <p>
          <a href="https://drive.google.com/file/d/16nm1dAGh-NvrCdnqE7x8EqVERB_5PoE9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
            Take a look at my CV.
          </a>
          </p>
          <hr />
          <p>      
            <strong>myStack = </strong>
            React, JavaScript, Typescript, Redux, Node.js, Mongo DB, CSS & HTML
          </p>
            <div className="image">
            <img src={ironLogo} alt="Ironhack" height="90px" width="90px" />
            </div>   
            <br /><br /> 
             <p>        
             Graduate of Ironhack Berlin - Web Dev Bootcamp
             </p>
        </header>
      </div>
    </section>

    <section id="projects" className="wrapper style4">
      <div className="inner">
      <header className="major"> 
          <h2>PROJECTS</h2>
        </header>
        </div>
        </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
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
          <Link to="/Project1">More details</Link>
        </Link>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
        <Link to="/Project2">
          <img src={pic2} alt="" />
        </Link>
        </div>
        <div className="content">
        <Link to="/Project2">
          <h2>
            all my plants
          </h2>
          <p>
          Virtual garden to keep track of the plants you have at home 
          and their specific care requirements.
          </p>
          <Link to="/Project2">More details</Link>
          </Link>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
        <Link to="/Project3">
          <img src={pic3} alt="" />
        </Link>
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
          <Link to="/Project3">More details</Link>
          </Link>
        </div>
      </section>
    </section>

    
    <section id="cta" className="wrapper style4">
      <div className="inner">
      <header className="major"> 
        <h2>Contact me</h2>
        <p>
          Happy to have a chat about a new project idea, a job offer, or any metaphysical concerns.
        </p>
        <a href='mailto:mariepascalehardy@gmail.com' 
        target="_blank"
        rel="noopener noreferrer">
        Email me 
        </a> 
        &nbsp;or find me on&nbsp;
        <a href='https://github.com/mariehardy' 
        target="_blank"
        rel="noopener noreferrer">
         Github 
        </a>
        &nbsp;or&nbsp;
         <a href='https://www.linkedin.com/in/hardy-marie/' 
        target="_blank"
        rel="noopener noreferrer">
         LinkedIn
        </a>
        .
      </header>
        
					{/* <form method="post" action="mailto:mariepascalehardy@gmail.com">   
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
								<input type="checkbox" id="demo-human" name="demo-human" 
                // defaultChecked 
                />
								<label htmlFor="demo-human">Not a robot</label>
							</div>
							<div className="col-12">
								<ul className="actions">
									<li><input type="submit" value="Send Message" className="primary" /></li>
									<li><input type="reset" value="Reset" /></li>
								</ul>
							</div>
              
						</div>
					</form> */}
        
      </div>
    </section>
  </Layout>
);

export default IndexPage;
