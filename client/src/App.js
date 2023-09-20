import Header from './components/Header.jsx';
import Main from './components/Index.jsx';
import Services from './components/Services.jsx';
import Contact_Us from './components/Contact_Us.jsx';
import About from './components/About.jsx';


import {Routes , Route } from "react-router-dom" 

import './components/Footer.css';

function App() {
  return (
    <>
    
        <Header></Header>

          <Routes>
          <Route path="/"  element={<Main />}/>
          <Route path="/Services.jsx" element={<Services />}/> 
          <Route path="/Contact_Us.jsx" element={<Contact_Us />}/>
          <Route path="/About.jsx" element={<About />}/>
          </Routes>

          <div className="footer">
          <marquee behavior="" direction="right">
                <p> Make your Idea Real</p>
            </marquee>
          </div>

    </>
  );
}

export default App;
