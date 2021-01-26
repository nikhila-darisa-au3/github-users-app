import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {gitUsersList,searchedData,userData} from '../reducers/reducer'
let reducer = combineReducers({
    searchedData:searchedData,
    gitUsersList:gitUsersList
})
let store = createStore(reducer,applyMiddleware(thunk))

store.subscribe(()=>{
    
})

function mapDispatchToProps(state){
    return state
}
export {mapDispatchToProps,store}