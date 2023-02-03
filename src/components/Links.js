import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export function Links() {
  return (
    <div className="links">
      <a href="https://twitter.com/cherrartem" target="_blank"><FontAwesomeIcon icon={faTwitter} /> My Twitter</a>
      <a href="https://github.com/TemaTech" target="_blank"><FontAwesomeIcon icon={faGithubAlt} /> My GitHub</a>
    </div>
  );
}
