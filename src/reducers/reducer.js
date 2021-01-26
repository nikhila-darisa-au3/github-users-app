import {SET_SEARCHED_DATA,SET_GIT_USERS_DATA,GET_USER_DATA,CLEAR_SEARCH_DATA} from '../action/actions'
export function searchedData(state={},action){
    if(action.type===SET_SEARCHED_DATA){
        let result = []
        result.push(action.users)
        state=result
    }
    if(action.type===CLEAR_SEARCH_DATA){
        state=""
    }
    return state
}
export function gitUsersList(state={users:[],userDetails:''},action){
    if(action.type===SET_GIT_USERS_DATA){
        for(let i of action.gitUsers){
            state.users.push(i)
        }
        return state
    }
    if(action.type===GET_USER_DATA){
        let id = Number(action.id)
        let results = state.users.filter((data)=>data.id===id)
        state.userDetails = results[0]
        console.log(id)
        return {...state}
    }
    return state
}
