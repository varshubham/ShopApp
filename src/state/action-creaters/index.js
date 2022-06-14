export const addshop = (shop) =>{
    return (dispatch)=>{
        dispatch({
            type : 'add',
            payload : shop
        })
    }
}

export const idcount = (count) =>{
    return (dispatch)=>{
        dispatch({
            type : 'count',
            payload : count
        })
    }
}

export const deleteshop = (id)=>{
    return (dispatch)=>{
        dispatch({
            type : 'delete',
            payload : id
        })
    }
}

export const setstate =(category)=>{
    return (dispatch)=>{
        dispatch({
            type : "category",
            payload : category
        })
    }
}


