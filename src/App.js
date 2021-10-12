import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import { Header, Sidebar } from './components';
import { Home, Design, Models, Performance, Contact } from './pages';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setCars(data.cars);
    });
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <div className="wrapper">
        <Header />
        <Route path="/home" component={Home} exact />
        <Route path="/design" component={Design} exact />
        <Route path="/performance" component={Performance} exact />
        <Route path="/models" render={() => <Models items={cars} />} exact />
        <Route path="/contact" component={Contact} exact />
      </div>
    </div>
  );
}

export default App;
