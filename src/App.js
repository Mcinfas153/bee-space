import './App.css';
import BottomNavigation from './component/SimpleBottomNavigation';
import Home from './component/Home';
import List from './component/List';
import News from './component/News';
import Test from './component/Test';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="grid grid-cols-1 m-5">
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
