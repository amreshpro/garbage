import { createStore } from "redux";


// store
const store = createStore(reducer)

// reducer
function reducer(state={amount:0},action){
    if(action.type === 'badhana'){
// don't write state.amount +1
        return {amount:state.amount+1}
    }
    else if(action.type === 'ghatana'){
        // don't write state.amount +1
                return {amount:state.amount-1}
            }
    else return state
}



store.subscribe(()=>{
    console.log(store.getState())
})

// global state

// let res =store.getState()
// console.log(res)


store.dispatch({type:'badhana'})
// console.log(store.getState())
store.dispatch({type:'badhana'})
// console.log(store.getState())
store.dispatch({type:'ghatana'})



