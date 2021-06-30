import React, { useEffect } from 'react';
import '../src/assets/sass/main.scss';
import Dashboard from './pages/Dashboard';
import { invoicesData } from './assets/data/data';

function App() {

  useEffect(() => {
    console.log(document.title = `Invoices(${invoicesData.length}) | Invoice App`);
  }, [invoicesData.length])

  return (
    <>
      <main>
        <Switch>
          <Route path="/" exact>
            <Dashboard dataLength={invoicesData.length} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
