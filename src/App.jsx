import React from 'react';
import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
} from 'react-router-dom';

import './reset.css';
import './app.css';

import Header from './Header';
import Footer from './Footer';

import Page404 from './404';
import Projects from './Projects';
import About from './About';

function App() {
  return (
    <BrowserRouter>
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
          <Route path="*" element={<Page404 />} />
          <Route path="projects/*" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
