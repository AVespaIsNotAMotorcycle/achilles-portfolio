import React from 'react';
import {
  BrowserRouter,
  Outlet,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';

import './reset.css';
import './app.css';

import Header from './Header';
import Footer from './Footer';

import Projects from './Projects';
import About from './About';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path=""
          element={(
            <>
              <Header />
              <main>
                <Outlet />
              </main>
              <Footer />
            </>
          )}
        >
          <Route index element={<Navigate to="/projects" />} />
          <Route path="projects/*" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
