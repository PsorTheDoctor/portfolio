import './App.css';
import { useState, useEffect } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Page } from './components/page/Page';
import { Footer } from './components/footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.setAttribute(
      'theme', darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Page />
      <Footer />
    </div>
  );
}
export default App;
