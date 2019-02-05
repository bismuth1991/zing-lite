import React from 'react';

const About = () => (
  <>
    <h4 style={{ textAlign: 'center' }}>
      <span>Designed by: Bao Tran </span>
      <br />
      <a href="https://github.com/bismuth1991"><i className="fab fa-github" /></a>
      <span>{' '}</span>
      <a href="https://www.linkedin.com/in/baotran-91/"><i className="fab fa-linkedin" /></a>
    </h4>

    <ul>
      <strong>Technologies used:</strong>
      <li>JavaScript</li>
      <li>Ruby</li>
      <li>Ruby on Rails</li>
      <li>PostgreSQL</li>
      <li>React/Redux</li>
      <li>HTML5/CSS3</li>
    </ul>
  </>
);

export default About;
