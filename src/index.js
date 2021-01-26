import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import RepoDetails from './components/repoDashboard'
import reportWebVitals from './reportWebVitals';
import { store } from './store/store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import UserProfile from './components/userProfile'
class Root extends React.Component{
  render(){
    console.log(store.getState())
    return(
      <React.Fragment>
        <Router>
          <Route exact component={App} path="/"/>
          <Route exact component={RepoDetails} path="/repo-dashboard"/>
          <Route  component={UserProfile} path="/user/:name"/>
        </Router>
      </React.Fragment>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
