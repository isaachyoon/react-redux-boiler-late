import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import Header from'./Header/index';

const Dashboard = () => {
  return ( 
    <Provider store={createStore(reducers)}>
      <div>
        <Header></Header>
      </div>
    </Provider>
  )
}

export default Dashboard;