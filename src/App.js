import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import SkillsComponent from './components/SkillsComponent';
import PortfolioComponent from './components/PortfolioComponent';
import FooterComponent from './components/FooterComponent';
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <AboutComponent/>
      <SkillsComponent/>
      <PortfolioComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
