import React from 'react'
import '../styles/app.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { mapDispatchToProps } from '../store/store'
import { SET_SEARCHED_DATA } from '../action/actions'
class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            searchValue: ""
        }
    }

    getInput = (e) => {
        let text = e.target.value
        this.setState({
            searchValue: text
        })
    }
    submitSearchValue = () => {
        fetch(`https://api.github.com/users/${this.state.searchValue}`, {
            headers: {
                "Authorization": "31381542e4f237f42149f20d530ebe43c96520b7"
            }
        }).then((res) => res.json()).then((res) => {
            this.props.dispatch({
                type: SET_SEARCHED_DATA,
                users: res
            })
        })
    }
    render() {
        return (
            <div className="search-bar">
                <div>
                    <Link to="/" className ="link"><h6 style={{"color":"white"}}>Home</h6></Link>
                </div>
                <div>
                    <input className="mr-3 pt-1" onChange={(e) => this.getInput(e)} />
                    <button className="btn btn-primary" onClick={this.submitSearchValue}>Search</button>
                </div>
            </div>
        )
    }
}
export default connect(mapDispatchToProps)(Navbar)