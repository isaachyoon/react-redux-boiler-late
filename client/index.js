import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index.jsx';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';





const render = Component => {
  ReactDOM.render(
  <AppContainer>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </AppContainer>, 
  document.getElementById('root'),
  )
}

render(App);
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/index', () => { render(App) })
}
