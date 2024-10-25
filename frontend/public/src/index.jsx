import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
<<<<<<< HEAD:frontend/public/src/index.jsx
import App from './pages/landingpage/App.jsx';
import Login from './pages/login/login.jsx'
=======
import Navigation from './routes';
>>>>>>> b608f0e5d84fee1ef8cb69af3b662138bc16ebb5:src/index.jsx
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
<<<<<<< HEAD:frontend/public/src/index.jsx
    <App/>
=======
   
    <Navigation />
>>>>>>> b608f0e5d84fee1ef8cb69af3b662138bc16ebb5:src/index.jsx
  </React.StrictMode>
)
