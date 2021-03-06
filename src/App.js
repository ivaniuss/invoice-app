import React, { useEffect } from 'react';
import '../src/assets/sass/main.scss';
import Dashboard from './pages/Dashboard';
import { Switch, Route } from 'react-router-dom';
import Invoice from './pages/Invoice';
import { getInvoices } from './service/api/getInvoices';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await getInvoices();
      if (res) {
        res.forEach(invoice => {
        })
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <main>
        <Switch>
          <Route path="/invoice-app" exact>
            <Dashboard />
          </Route>
          <Route path="/invoice-app/invoice/:id" exact>
            <Invoice />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
