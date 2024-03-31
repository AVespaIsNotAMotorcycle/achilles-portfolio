import React from 'react';
import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import './header.css';

const PAGES = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

function HeaderLink({ page }) {
  const { pathname } = useLocation();
  const currentPage = pathname === page.href;
  const className = currentPage ? 'current' : undefined;

  return <li><Link className={className} to={page.href}>{page.label}</Link></li>;
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
        <div className="logo">Achilles Batista</div>
        <nav>
          <ul>
            {PAGES.map((page) => <HeaderLink key={page.label} page={page} />)}
          </ul>
        </nav>
      </div>
    </header>
  );
}
