---
layout: default
title: Portfolio
permalink: /portfolio/
---
<div class="portfolio-container">
  <div class="landing-wrap section">
    <img class="my-face" src="/assets/images/face_small.jpg" alt="My Face"/>
    <h2 class="portfolio-description">Hi! I'm Alex & I Build Software.</h2>
    <p>Click or Scroll to view my projects.</p>
    <a class="btn btn-lg" href="#gallery">View Projects</a>
  </div>
  <div id="gallery">
    {% include_relative _includes/project.html 
      src='/assets/images/cover_codebin.jpg'
      alt='Codepen Clone | Full Stack Development'
      href='https://c0d3bin.herokuapp.com/'
      text='Codepen Clone | Full Stack Development'
    %}
    {% include_relative _includes/project.html 
      src='/assets/images/cover_secretsanta.png'
      alt='Secret Santa Online | Full Stack Development'
      href='https://secret-santa-13.herokuapp.com'
      text='Secret Santa Online | Full Stack Development'
    %}
    {% include_relative _includes/project.html 
      src='/assets/images/cover_bearbnb.png'
      alt='Airbnb Clone | Front-End Development'
      href='https://bearbnb-06.herokuapp.com'
      text='Airbnb Clone | Front-End Development'
    %}
    {% include_relative _includes/project.html 
      src='/assets/images/cover_freecodecamp.png'
      alt='FreeCodeCamp Portfolio | Full Stack Development'
      href='https://freecodecamp-portfolio.glitch.me/'
      text='FreeCodeCamp Portfolio | Full Stack Development'
    %}
  </div>
  <div class="section" id="skills">
    <h1>Skills</h1>
    <p>I believe that technology should <i>solve problems</i> instead of complicating them.<br/><b>That's why I actively learn the tech needed to get the job done!</b><br/> With that said, I'm most familiar with <u>JavaScript, HTML, CSS, ReactJS, NodeJS, Express, and MongoDB.</u></p>
    <p>I write software mostly <b>every day</b> to stay on top of the new jazzy tech. <br/>It takes <b>hard work</b> and <b>dedication</b> to live up to my high standards for quality work.</p>
    <br/>
    <h3>Front-End</h3>
    <p>JavaScript, ReactJS, JQuery, HTML, CSS, Sass, Bootstrap, Mobile-First, Responsive Design</p>
    <h3>Back-End</h3>
    <p>RESTful apis, NodeJS, Express, MongoDB, Mongoose, Passport, C#/Java (Minimal)</p>
    <h3>Other</h3>
    <p>Git, Github, Heroku, mLab, Jekyll, Photoshop</p>
  </div>
  <div class="about-container">
  {% include_relative _includes/about.html %}
  </div>
  <div class="section" id="contact">
    <h1>Contact Me</h1>
    <p>Hi! Let's chat. Send me an email/message through any of the services below. I'm most active on LinkedIn and Github.</p>
    <a href="mailto:alexcannon2018@gmail.com"><i class="fas fa-envelope-square fa-3x"></i></a>
    <a href="https://github.com/alex-cannon"><i class="fab fa-github-square fa-3x"></i></a>
    <a href="https://www.linkedin.com/in/alexander-cannon-2a5b0513b/"><i class="fab fa-linkedin fa-3x"></i></a>
    <a href="https://www.youtube.com/channel/UCLX0n9oWmGkjKmK8iuPf8wQ?view_as=subscriber"><i class="fab fa-youtube-square fa-3x"></i></a>
  </div>
</div>