import React from 'react'
import Navbar from './navbar'
import DisplayGitUsers from './displayGitUsers'
import { connect } from 'react-redux'
import { CLEAR_SEARCH_DATA } from '../action/actions'
import { mapDispatchToProps } from '../store/store'
class RepoDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userDetails: ''
        }
    }
    componentDidMount() {
        this.props.dispatch({
            type: CLEAR_SEARCH_DATA,
        })
        let data = this.props.location.data
        console.log(data)
        this.setState({
            userDetails: data
        })
    }
    render() {
        const { userDetails } = this.state
        return (
            <div>
                <Navbar />
                {Object.keys(this.props.searchedData).length !== 0 ?
                    <DisplayGitUsers content={this.props.searchedData} /> :
                    userDetails ?
                        <div>
                            <h2 style={{ "display": "flex", "justifyContent": "center" }} className="mt-5">Repositary Dashboard</h2>
                            <div className="row mt-5">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4 repo-card">
                                    <img src={userDetails.owner.avatar_url} width='100' className="user-image mr-4" alt="image"></img>
                                    <h5 className="mt-2">User Name - <span>{userDetails.owner.login}</span></h5>
                                    <h6>Repository Name - {userDetails.name}</h6>
                                    <h6>Stars - {userDetails.stargazers_count}</h6>
                                    <h6>Issues - {userDetails.open_issues}</h6>
                                    <h6>forks - {userDetails.forks}</h6>
                                </div>
                                <div className="col-sm-4"></div>
                            </div>
                        </div> : null}
                {/* {userDetails ?
                    <div className="row mt-5">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4 repo-card">
                            <img src={userDetails.owner.avatar_url} width='100' className="user-image mr-4" alt="image"></img>
                            <h5 className="mt-2">User Name - <span>{userDetails.owner.login}</span></h5>
                            <h6>Repository Name - {userDetails.name}</h6>
                            <h6>Stars - {userDetails.stargazers_count}</h6>
                            <h6>Issues - {userDetails.open_issues}</h6>
                            <h6>forks - {userDetails.forks}</h6>
                        </div>
                        <div className="col-sm-4"></div>
                    </div> : null
                } */}
            </div>
        )
    }
}
export default connect(mapDispatchToProps)(RepoDetails)