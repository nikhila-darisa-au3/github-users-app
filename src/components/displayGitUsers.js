import React from 'react'
import { Link } from 'react-router-dom'
import {CLEAR_SEARCH_DATA} from '../action/actions'
class DisplayGitUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: []
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {
            content: props.content
        }
    }
    // componentDidMount(){
    //     this.props.dispatch({
    //         type: CLEAR_SEARCH_DATA,
    //       })
    // }
    render() {
        const { content } = this.state
        return (
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4 mt-5">
                    {content.map((data) => {
                        // let result = ''
                        // fetch(`${data.followers_url}`, {
                        //     headers: {
                        //         "Authorization": "31381542e4f237f42149f20d530ebe43c96520b7"
                        //     }
                        // }).then((content) => content.json()).then((res) => {
                        //     result = res.length
                        // })
                        return <div key={data.id}>
                            <Link to={{
                                pathname: `/user/${data.login}`,
                                data:data
                            }}
                                className='user-card link'> <img src={data.avatar_url} width='100' className="user-image mr-4" alt="image"></img>
                                <h5 className="mt-2">UserName - <span>{data.login}</span></h5></Link>
                        </div>
                    })}
                </div>
                <div className="col-sm-4"></div>
            </div>
        )
    }
}
export default DisplayGitUsers