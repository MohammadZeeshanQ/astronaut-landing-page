import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingIndex from './routes/LandingPage/Index';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={LandingIndex} />
      </Switch>
    </Router>

  );
}

export default App;
