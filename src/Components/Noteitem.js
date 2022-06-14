import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../state/index'

const Noteitem = (props) => {
  const note = props.note;
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreaters, dispatch)
  const deleteshop = ()=>{
    actions.deleteshop(note.id)
  }
  return (
    <div style={{ border: "2px solid black", margin: "auto", marginBottom: "10px",marginTop:"10px", width: "70%", display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "block", margin: "15px" }}>
        <p><b>Shop Name : </b>{note.name}</p>
        <p><b>Category : </b>{note.category}</p>
        <p><b>Area : </b>{note.area}</p>
      </div>
      <div style={{ display: "block", margin: "15px" }}>
        <p><b>Opening Date : </b>{note.odate}</p>
        <p><b>Closing Date : </b>{note.cdate}</p>
        <button onClick={deleteshop}>Delete</button>
      </div>
    </div>
  )
}

export default Noteitem

