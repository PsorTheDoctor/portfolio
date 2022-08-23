import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Page } from './components/page/Page';
import { Footer } from './components/footer/Footer';
import CambriaFont from './fonts/CambriaFont';

function App() {
  return (
    <div>
      <CambriaFont />

      <Navbar />
      <Page />
      <Footer />
    </div>
  );
}
export default App;
