import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
  return (
    <footer>
        <div className='footer-icons'>
            <a href='https://github.com/tylerneal27'><FontAwesomeIcon icon={faLinkedin} size='4x' /></a>
            <a href='https://www.linkedin.com/in/william-neal27/'><FontAwesomeIcon icon={faSquareGithub} size='4x' /></a>
        </div>
    </footer>
  );
}

export default Footer;