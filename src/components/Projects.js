import React from 'react';
import columbusImg from '../images/columbus-guide.png';
import dndProject from '../images/pageDisplay.png';
import reShift from '../images/BigBoyProd3.png';

function Projects(props) {
  return (
    <section>
        <h3 id="work">work</h3>
        <article className='projects-article'>
          <a href="https://reshift-servermonks.herokuapp.com/"><img className="img-scaling" src={reShift} alt='shows screenshot of my project 3 from my coding bootcamp'/></a>
          <a href="https://galdronis.github.io/Travel-Guide/index.html"><img className="img-scaling" src={columbusImg} alt="link to the first collaborative project of my bootcamp."/></a>
          <a href="https://github.com/tylerneal27/horiseon-refactor"><img className="img-scaling" src="https://github.com/tylerneal27/horiseon-refactor/blob/main/assets/images/horiseon_ss.png?raw=true" alt="link to the first challenge in my bootcamp."/></a>
          <a href="https://ancient-cliffs-85623.herokuapp.com/"><img className="img-scaling" src={dndProject} alt="this is my second bootcamp project homepage"/></a>
        </article>
      </section>
  );
}

export default Projects;