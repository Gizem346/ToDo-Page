import React,{useState, useEffect} from 'react'; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  // const [username, setUsername] = useState("");
  // const [usersurname, setUsersurname] = useState("");
  // const [user, setUser] = useState()

  // const handleSubmit = e => {

  // }

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
