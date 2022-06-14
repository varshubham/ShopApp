import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../state/index'



const Addshop = () => {
  const letters = /^[A-Za-z]+$/
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreaters, dispatch)
  const [shop, setShop] = useState({ id: "", name: "", category: "", area: "", odate: "", cdate: "" })
  const handleclick = (e) => {
    e.preventDefault();
    if(shop.name==="" || shop.category==="" || shop.area==="" || shop.odate ==="" || shop.cdate==="")
    {
      alert("All fields must be filled")
      return false
    }
    else if (!shop.name.match(letters)) {
      alert("Shop name must contain only Alphabets")
      return false
    }
    
    actions.idcount(1);
    shop.id = count;
    actions.addshop(shop);
    document.getElementById('success').style.display="block"
    document.getElementById('form').reset()
    setTimeout(()=>{
      document.getElementById('success').style.display="none"
    },1000)
    
  }

  const onChange = (e) => {
    setShop({ ...shop, [e.target.name]: e.target.value })
  }
  return (
    <>
    <div id='success' style={{width:"100%",backgroundColor:"green",color:"white",textAlign:"center",display:"none"}}>Shop Added Successfully</div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      
      <div style={{ width: "500px" }}>
        <h1>Add a Shop</h1>
        <form id='form'>
          <div>
            <label htmlFor="name" style={{ display: "block", margin: "10px", marginLeft: "0px" }} >Shop Name </label>
            <input type="text" style={{ width: "500px", height: "20px" }} id="name" name='name' onChange={onChange} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <label htmlFor="category" style={{ display: "block", margin: "10px", marginLeft: "0px" }} >Category</label>
              <select name='category' defaultValue={'default'} onChange={onChange}>
                <option value="default" disabled hidden>Select Category</option>
                <option value="Grocery">Grocery</option>
                <option value="Butcher">Butcher</option>
                <option value="Baker">Baker</option>
                <option value="Chemist">Chemist</option>
                <option value="Stationary Shop">Stationary Shop</option>
              </select>
            </div>
            <div>
              <label htmlFor="area" style={{ display: "block", margin: "10px", marginLeft: "0px" }} >Area</label>
              <select name="area" defaultValue={'default'} onChange={onChange}>
                <option value="default"  disabled hidden>Select Area</option>
                <option value="Pune">Pune</option>
                <option value="Thane">Thane</option>
                <option value="Mumbai Suburban">Mumbai Suburban</option>
                <option value="Nashik">Nashik</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Ahmednagar">Ahmednagar</option>
                <option value="Solapur">Solapur</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="odate" style={{ display: "block", margin: "10px", marginLeft: "0px" }} >Opening Date</label>
            <input type="date" style={{ width: "500px", height: "20px" }} id="odate" name='odate' onChange={onChange} />
          </div>
          <div>
            <label htmlFor="cdate" style={{ display: "block", margin: "10px", marginLeft: "0px" }} >Closing Date</label>
            <input type="date" style={{ width: "500px", height: "20px" }} id="cdate" name='cdate' min={shop.odate} onChange={onChange} />
          </div>
          <input type="submit" style={{ margin: "10px", marginLeft: "0px" }} onClick={handleclick} />
        </form>
      </div>
    </div>
    </>
  )
}

export default Addshop
