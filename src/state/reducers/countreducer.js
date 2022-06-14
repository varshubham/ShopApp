const initialstate = 3

const countreducer=(state = initialstate , action)=>{
    if(action.type==='count'){
        return state=state+action.payload;
    }
    else{
        return state
    }
}
export default countreducer