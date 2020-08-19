import React from 'react';
import pic1 from '../assets/images/IMG_8281-1.jpg';
import pic2 from '../assets/images/allmyplantslanding.jpg';
import pic3 from '../assets/images/monkandmonkey.jpg';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>ShapeIT</h2>
        <p>Social fitness platform for a good cause</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <p>
          ShapeIT provides a 30-day video-based fitness program, nutrition 
          basics and the opportunity to make a donation to the good cause of your choice.
          <hr />
          Technologies: React, Javascript, Node.js, Express, MongoDB, HTML, CSS
          <br />
          Integrated donation feature via Pledgeling APIs. 
          <br /><br />
          Developed in collaboration Olga Knyazkova.
          {/* Currently working on the mobile native prototype with React Native. */}
          </p>
          <br />
          <ul className="actions fit">
          <li></li>
						<li><a href="http://shapeitbaby.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button primary fit">Visit Website</a></li>
            <li></li>
					</ul>
        </div>
      </section>

      <section>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
						</div>
					</div>
			</section>


    </article>
  </Layout>
);

export default IndexPage;
