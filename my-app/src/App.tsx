import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Containers/Home';
import About from './Containers/About';
import Schedule from './Containers/Schedule';


function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Schedule' component={Schedule} />
        </Switch>
      </Router>
  );
}

export default App;
