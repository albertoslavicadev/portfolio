import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/shakleDev" target="_blank" rel="noreferrer"><BsTwitter /></a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/albertoslavica/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://github.com/albertoslavicadev" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  </div>
);

export default SocialMedia;
