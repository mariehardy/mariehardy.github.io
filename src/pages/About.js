import React from 'react';

import ironLogo from '../assets/images/logo_ironhack_blue@3x.png';

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
          My background in Graphic Design and Quality Assurance 
          Engineering gave me a razor-sharp eye for detail 
          and an understanding of Agile methodology. 
          I am eager to join a team where I can contribute 
          with my creative and quality-oriented approach.
          </p>
          <p className="align-center">
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
           
        </div>
      </section>

      <section>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
						<div className="col-12"></div>
							<div className="col-4"></div>
							<div className="col-4"></div>
							<div className="col-4"></div>
    						</div>
					</div>
			</section>
      
    </article>
  </Layout>
);

export default IndexPage;
