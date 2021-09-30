import React, { Component } from 'react'
import axios from 'axios';
import { Fragment } from 'react/cjs/react.production.min';
import Navbar from './layouts/Navbar';
import Users from './users/Users';

class App extends Component {

  state = {
    users: [],
    loading: true
  }

  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users');
    this.setState({
      users: res.data,
      loading: false
    })
  }


  render() {
    const { users, loading } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <Users users={users} loading={loading} />
        </div>
      </Fragment>
    )
  }
}

export default App;
