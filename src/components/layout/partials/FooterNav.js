import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="mailto:benjamin@riff.cc">Contact</a>
        </li>
        <li>
          <a href="https://docs.riff.cc/about">About us</a>
        </li>
        <li>
          <a href="https://docs.riff.cc/faq">FAQs</a>
        </li>
        <li>
          <a href="https://docs.riff.cc/help">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
