import React from 'react';
import './Styles/App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";

function App() {

  const  [{ user }] = useStateValue();

  return (
    <div className="app"> 
      <Router>
        {!user ? (
          <Login />
        ):(
          <>          
            <Header />
            <div className="app-body">
              <Sidebar />
              {/* react-router chat screen */}
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div> 
          </>
        )}
      </Router>
    </div>    
  );
}

export default App;
