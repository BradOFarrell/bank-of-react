import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Home from './components/Home.jsx'
import UserProfile from './components/UserProfile.jsx'
import Account from './components/Account.jsx'
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: {
        userName: 'ejonelunas',
        memberSince: 1995,
      },
      debits: [],
      credits: [],
    };
  }

  _getDebits = () => {
    axios.get('http://localhost:4000/credits').then((response) => {
      const debits = response.data;
      this.setState({debits});
    });
  };
  
  _getCredits = () => {
    axios.get('http://localhost:4000/credits').then((response) => {
      const credits = response.data;
      this.setState({credits});
    });
  };

  _addNewDebit = (newDebit) => {
    const debits = [...this.state.debits];
    debits.push(newDebit);
    this.setState({debits});
  };

  _addNewCredit = (newCredit) => {
    const credits = [...this.state.credits];
    credits.push(newCredit);
    this.setState({credits});
  };

  componentWillMount() {
    this._getCredits();
    this._getCredits();    
  }
  render() {
    const accountWrapper = () => (
      <Account balance='500'/>
      );

    return (
      <div className="App">
        <Router>
        <Switch>
            <Route path="/account" component={accountWrapper}/>
            <Route path="/user" component={UserProfile}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
