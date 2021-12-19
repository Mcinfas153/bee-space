import './App.css';
import BottomNavigation from './component/SimpleBottomNavigation';
import Home from './component/Home';
import List from './component/List';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="grid grid-cols-1">
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <BottomNavigation />
        </div>
      </div>
    </Router>
  );
}

export default App;
