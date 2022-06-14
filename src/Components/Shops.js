import React from 'react'
import { useSelector } from 'react-redux';
import Noteitem from './Noteitem';


const Shops = () => {
    const shop = useSelector(state=> state.shop)
    
  return (
    <div>
        {shop.map((note)=>{
           return <Noteitem key={note.id} note={note}/>
        })}
    </div>
  )
}

export default Shops
