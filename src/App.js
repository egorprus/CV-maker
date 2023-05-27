import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Contacts from './components/Contacts';
import Resume from './components/Resume';
import About from './components/About';
import Application from './components/Application';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <div className="main-wrapper">
          <main className="main container">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/" element={<Contacts />} />
              <Route path="/app" element={<Application />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;