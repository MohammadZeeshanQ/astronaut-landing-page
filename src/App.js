import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingIndex from './routes/LandingPage/Index';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={LandingIndex} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
