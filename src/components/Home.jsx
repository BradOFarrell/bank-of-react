import React, { Component } from 'react';
import Credit from './Credit';

class Home extends Component {
  render() {
    const creditComponents = this.props.account.credits.map((credit, index) => {
      return <Credit
          description={credit.description}
          amount={credit.amount}
          date={credit.date}
          key={index}/>;
    });

    const debitComponents = this.props.account.debits.map((credit, index) => {
      return <Credit
          description={credit.description}
          amount={credit.amount}
          date={credit.date}
          key={index}/>;
    });

    return ( 
      <div>
        <h1>Welcome, {this.props.account.currentUser.userName}</h1>
        <h2>Credits</h2>
        {creditComponents}
        <h2>Debits</h2>
        {this.props.account.debits.toString()}
      </div>
    );
  }
}

export default Home;
