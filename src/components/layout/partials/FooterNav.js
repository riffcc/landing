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
          <Link to="mailto:benjamin@riff.cc">Contact</Link>
        </li>
        <li>
          <Link to="https://docs.riff.cc/about">About us</Link>
        </li>
        <li>
          <Link to="https://docs.riff.cc/faq">FAQs</Link>
        </li>
        <li>
          <Link to="https://docs.riff.cc/help">Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
