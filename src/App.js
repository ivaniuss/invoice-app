import React from 'react';
import '../src/assets/sass/main.scss';
import Dashboard from './pages/Dashboard';
import { Switch, Route } from 'react-router-dom';
import Invoice from './components/DashboardComponents/Invoices/Invoice';

function App() {

  return (
    <>
      <main>
        <Switch>
          <Route path="/invoice-app" exact>
            <Dashboard />
          </Route>
          <Route exact path='/invoice-app/invoice/:id' component={Invoice}/>
        </Switch>
      </main>
    </>
  );
}

export default App;
