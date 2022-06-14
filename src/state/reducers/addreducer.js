

const initialstate = [
    {
        id:1,
        name:"Shubham shop",
        category : "Grocery",
        area : "Pune",
        odate : "2022-06-16",
        cdate : "2022-09-16"
    },
    {
        id:2,
        name:"Cake shop",
        category : "Baker",
        area : "Thane",
        odate : "2022-06-16",
        cdate : "2022-09-16"
    }
]

const reducer = (state=initialstate,action) => {
    if(action.type==="add")
    {
        return state.concat(action.payload)
    }
    else if(action.type==="delete")
    {
        
        return state.filter((note)=>note.id !==action.payload)
    }
    else{
        return state
    }
}

export default reducer
