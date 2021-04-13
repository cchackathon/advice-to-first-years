import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/profile/:id" component={Profile} />
      </div>
    </Router>
    
  );
}

export default App;
