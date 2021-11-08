import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://picsum.photos/201" alt="bank"/>
          <h1>Bank of React</h1>

          <Link to="/logIn">Log In  </Link>
          <Link to="/userProfile">User Profile </Link>
          <Link to="/debits">Debits </Link>
          <Link to="/credits">Credits </Link>
          
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;