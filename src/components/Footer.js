import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} 
                className={`icon ${style} ${icon}`}
                target="_blank"
                rel="noopener noreferrer">
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      
      <ul className="copyright">
        <li>
          Background photo &copy; hardy &ndash; Wall of Jaigarh Fort, India, 2018.
        </li>
        <li> built using &copy; spectral template by <a href="http://html5up.net">HTML5 UP</a></li>
        
      </ul>
    </footer>
  );
}
