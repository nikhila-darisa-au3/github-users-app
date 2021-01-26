import React from 'react'
import { GET_USER_DATA } from '../action/actions'
import { connect } from 'react-redux'
import Navbar from './navbar'
import { mapDispatchToProps } from '../store/store'
import { Link } from 'react-router-dom'
class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            followersUrl: "",
            details: '',
            userRepos: "",
            start: 0,
            end: 4
        }
    }
    beforeRepos = () => {
        if (this.state.end < this.state.userRepos.length) {
            this.setState({
                start: this.state.start + 4,
                end: this.state.end + 4
            })
        }
    }
    nextRepos = () => {
        if (this.state.start > 0) {
            this.setState({
                start: this.state.start - 4,
                end: this.state.end - 4
            })
        } else {
            this.setState({
                start: this.state.start - 4,
                end: this.state.end + 4
            })
        }
    }
    componentDidMount() {
        let data = this.props.location.data
        fetch(data.followers_url, {
            headers: {
                "Authorization": "31381542e4f237f42149f20d530ebe43c96520b7"
            }
        }).then((content) => content.json()).then((res) => {
            this.setState({
                followersUrl: res.length,
                details: data
            })
        })
        fetch(data.repos_url
            , {
                headers: {
                    "Authorization": "31381542e4f237f42149f20d530ebe43c96520b7"
                }
            }).then((content) => content.json()).then((res) => {
                this.setState({
                    userRepos: res
                })
            })
    }


    render() {
        const { followersUrl, details, userRepos } = this.state
        console.log("User Repos", userRepos, this.state.end)
        return (
            <React.Fragment>
                <Navbar />
                {details !== '' ?
                    <div className="userProfile mt-5">
                        <Profile details={details} followersUrl={followersUrl}/>
                        <div>
                            <h3>Repositories - {userRepos.length}</h3>
                            {userRepos.length > 0 ? userRepos.slice(this.state.start, this.state.end).map((data) => {
                                return <div key={data.id} className="user-card">
                                    <Link to={{
                                        pathname: `/repo-dashboard`,
                                        data: data
                                    }}><h5>{data.name}</h5></Link>
                                </div>
                            }) : null}
                            {userRepos.length > 4 ?
                                <div className="mt-3" style={{ "display": "flex" }}>
                                    {this.state.start !== 0 ? ((<div>
                                        <button className="btn btn-primary arrowright mr-5 ml-3" onClick={this.nextRepos}><i className="fa fa-arrow-left arrow" aria-hidden="true"></i></button>
                                    </div>)) : null}
                                    {this.state.end === userRepos.length ? null : (
                                        <button className="btn btn-primary arrowleft ml-5" onClick={this.beforeRepos}><i className="fa fa-arrow-right arrow" aria-hidden="true"></i></button>
                                    )}
                                </div>
                                : null}
                        </div>
                    </div>
                    : <h1>Loading...</h1>}
            </React.Fragment>
        );
    }
}
function Profile({details,followersUrl}) {
    return (
        <div className="mr-5">
            <img src={details.avatar_url} width='100' className="user-image mr-4" alt="image"></img>
            <h4 className="mt-2">User Id - {details.login}</h4>
            <div>
                <h6>Followers - {followersUrl}</h6>
                <h6></h6>
            </div>
        </div>
    )
}
export default connect(mapDispatchToProps)(UserProfile)