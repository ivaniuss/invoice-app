import React from 'react';
import '../src/assets/sass/main.scss';
import Dashboard from './pages/Dashboard';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <main>
        <Switch>
          <Route exact path="/invoice-app" exact>
            <Dashboard />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
