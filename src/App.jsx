import React from 'react';
import { Layout } from './components';
import { Users } from './containers';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Users />
      </Layout>
    </div>
  );
};

export default App;
