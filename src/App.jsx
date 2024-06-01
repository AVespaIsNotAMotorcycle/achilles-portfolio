import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';

import './reset.css';
import './app.css';

import Header from './Header';
import Footer from './Footer';

import Page404 from './404';
import Projects from './Projects';
import About from './About';

const router = createBrowserRouter(createRoutesFromElements(
  <Route
    path=""
    element={(
      <>
        <ScrollRestoration />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    )}
  >
    <Route index element={<Navigate to="/projects" />} />
    <Route path="*" element={<Page404 />} />
    <Route path="projects/*" element={<Projects />} />
    <Route path="about" element={<About />} />
  </Route>,
));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
