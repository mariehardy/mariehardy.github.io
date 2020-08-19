import React from 'react';
import pic1 from '../assets/images/IMG_8281-1.jpg';
import pic2 from '../assets/images/allmyplantslanding.jpg';
import pic3 from '../assets/images/monkandmonkey.jpg';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Monk & Monkey</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <p>
          Retro game in which you are a monk who must bring 
          an offering to Buddha Keanu Reeves&mdash;watch out for the monkeys!     
          <hr />
          Technologies: avascript, Canvas, HTML & CSS
          </p>
          <br />
          <ul className="actions fit">
          <li></li>
						<li><a href="https://hungry-pare-1c0fc1.netlify.com/"
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
