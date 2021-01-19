import React, {Component} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import routes from './router/router';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Switch>
          {
            routes.map(route =>{
              return (
                <Route
                  key = {route.path}
                  path = {route.path}
                  component = {route.component} />
              ) 
            })
          }
          <Redirect exact from = '/' to = { routes[0].path} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
