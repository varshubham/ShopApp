import React from 'react'
import { useSelector } from 'react-redux'
import Noteitem from './Noteitem'

const Category = () => {

    const category = useSelector(state => state.setstate)
    const shop = useSelector(state => state.shop)
    const newshop = shop.filter((note) => note.category === category)
    return (
        <div>
            {newshop.map((note) => {
                return <Noteitem key={note.id} note={note} />
            })}

        </div>
    )

}

export default Category
