import React from 'react';
import monkPic1 from '../assets/images/monk-01.png';
import monkPic2 from '../assets/images/monk-02.png';
import monkPic3 from '../assets/images/monk-03.png';
import monkPic4 from '../assets/images/monk-04.png';

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
          </p>
          <p>
          Soundtrack a courtesy of Nirvana.    
          </p> 
          <hr />
          <p>
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
						<div className="col-12"><span className="image fit"><img src={monkPic1} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={monkPic2} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={monkPic3} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={monkPic4} alt="" /></span></div>
    						</div>
					</div>
			</section>


    </article>
  </Layout>
);

export default IndexPage;
