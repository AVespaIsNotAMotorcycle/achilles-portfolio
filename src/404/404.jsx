import React from 'react';
import { Link } from 'react-router-dom';

import './404.css';

export default function Page404() {
  return (
    <div className="page404">
      <h1>404</h1>
      The requested page does not exist.
      <br />
      <Link to="/projects">Click here to return to the homepage</Link>
    </div>
  );
}
