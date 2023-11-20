import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import changeTextReducer from './reducers/changeTextReducer';
import handleSizeReducer from './reducers/handleSizeReducer';

const Reducer = combineReducers({
  text: changeTextReducer,
  display: handleSizeReducer
})

const store = createStore(Reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
