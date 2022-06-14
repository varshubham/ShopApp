const initialstate = " "

const statereducer=(state = initialstate , action)=>{
    if(action.type==='category'){
        return action.payload
    }
    else{
        return state
    }
}
export default statereducer