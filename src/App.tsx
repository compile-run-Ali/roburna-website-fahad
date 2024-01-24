import Main from './routes'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Floatbar} from './Components/Floatbar'
import {ScrollToTop} from "./Components/ScrollToTop";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import {Helmet} from 'react-helmet';

function App() {
  return (
    <div>
      <Header />
      <Helmet>
          <title>Roburna</title>
          <meta name='description' content='Roburna blockchain uses a new Proof-of-Earn (PoE) consensus mechanism, offering frictionless earning and elastic validation without extensive initial investments or technical know-how.'/>
          <meta property="og:image" content="https://roburna.com/static/media/banner.cfea34887d06d9f79b5d.png" />
      </Helmet>
      <Floatbar />
      <div className='page'>
          <ScrollToTop />
          <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
