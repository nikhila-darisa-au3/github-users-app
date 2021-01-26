import React from 'react'
import Navbar from './navbar'
import DisplayGitUsers from './displayGitUsers'
import { SET_GIT_USERS_DATA,CLEAR_SEARCH_DATA } from '../action/actions'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../store/store'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: ''
    }
  }
  componentDidMount() {
    this.props.dispatch({
      type: CLEAR_SEARCH_DATA,
    })
    fetch('https://api.github.com/users', {
      headers: {
        "Authorization": "31381542e4f237f42149f20d530ebe43c96520b7"
      }
    }).then((res) => res.json()).then((data) => {
      this.setState({
        users: data
      })
      this.props.dispatch({
        type: SET_GIT_USERS_DATA,
        gitUsers: data
      })
    })
  }
  render() {
    const {users} = this.state
    return (
      <div>
        <Navbar />
        {Object.keys(this.props.searchedData).length !== 0 ?
          <DisplayGitUsers content={this.props.searchedData} />
          :
          users ?
            <DisplayGitUsers content={users} />
            : <h1>Loading.....</h1>
        }
      </div>
    )
  }
}
export default connect(mapDispatchToProps)(App);
