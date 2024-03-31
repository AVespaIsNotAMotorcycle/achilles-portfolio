import React from 'react';
import propTypes from 'prop-types';

import './header.css';

const PAGES = [
  { href: '/', label: 'Work' },
  { href: '/about', label: 'About' },
];

function HeaderLink({ page }) {
  return <li><a href={page.href}>{page.label}</a></li>;
}
HeaderLink.propTypes = {
  page: propTypes.shape({
    href: propTypes.string,
    label: propTypes.string,
  }).isRequired,
};

export default function Header() {
  return (
    <header>
      <div>
        Achilles Batista
        <nav>
          <ul>
            {PAGES.map((page) => <HeaderLink key={page.label} page={page} />)}
          </ul>
        </nav>
      </div>
    </header>
  );
}
