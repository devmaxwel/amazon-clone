import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './components/context/StateProvider';
import { initialState, reducer } from './components/reducers/reducer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
