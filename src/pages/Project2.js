import React from 'react';
import pic1 from '../assets/images/IMG_8281-1.jpg';
import pic2 from '../assets/images/allmyplantslanding.jpg';
import pic3 from '../assets/images/monkandmonkey.jpg';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>all my plants</h2>
        <p>look after them and they'll look after you!</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <p>
          Virtual garden to keep track of all the plants you have at home and their specific care requirements.
          <hr />
          Technologies: Node.js, Express, MongoDB, Javascript, HTML, CSS
          <br />
          Plant search engine powered by Trefle's open, freely accessible botanical data source and REST API.
          <br /><br />
          Developed in collaboration with Camille Ory and Manuel Bürgel.
          </p>
          <br />
          <ul className="actions fit">
          <li></li>
						<li><a href="http://all-my-plants.herokuapp.com/"
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
