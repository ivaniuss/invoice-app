import React from 'react';
import '../src/assets/sass/main.scss';
import Dashboard from './pages/Dashboard';
import { Switch, Route } from 'react-router-dom';
import Invoice from './pages/Invoice';

function App() {

  return (
    <>
      <main>
        <Switch>
          <Route path="/invoice-app" component={Dashboard} exact />
          <Route path='/invoice-app/invoice/:id' component={Invoice} exact />
        </Switch>
      </main>
    </>
  );
}

export default App;
