import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          
          <Route path="/" component={Login} exact/>
          <Route path="/home" component={Home}  />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
