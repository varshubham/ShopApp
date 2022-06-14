import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../state/index'

const Navbar = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreaters, dispatch)
  const handleclick = (e)=>{
      actions.setstate(e)
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">Shop App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/shops">Shops</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/add">Add Shop</Link>
        </li>
        <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link  className="dropdown-item" to="/category/Grocery" onClick={()=>{handleclick("Grocery")}}>Grocery</Link></li>
            <li><Link  className="dropdown-item" to="/category/Butcher" onClick={()=>{handleclick("Butcher")}}>Butcher</Link></li>
            <li><Link  className="dropdown-item" to="/category/Baker" onClick={()=>{handleclick("Baker")}}>Baker</Link></li>
            <li><Link  className="dropdown-item" to="/category/Chemist" onClick={()=>{handleclick("Chemist")}}>Chemist</Link></li>
            <li><Link  className="dropdown-item" to="/category/Stationary Shop" onClick={()=>{handleclick("Stationary Shop")}}>Stationary Shop</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Areas
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link  className="dropdown-item" to="/area/Thane" onClick={()=>{handleclick("Thane")}}>Thane</Link></li>
            <li><Link  className="dropdown-item" to="/area/Pune" onClick={()=>{handleclick("Pune")}}>Pune</Link></li>
            <li><Link  className="dropdown-item" to="/area/Mumbai Suburban" onClick={()=>{handleclick("Mumbai Suburban")}}>Mumbai Suburban</Link></li>
            <li><Link  className="dropdown-item" to="/area/Nashik" onClick={()=>{handleclick("Nashik")}}>Nashik</Link></li>
            <li><Link  className="dropdown-item" to="/area/Nagpur" onClick={()=>{handleclick("Nagpur")}}>Nagpur</Link></li>
            <li><Link  className="dropdown-item" to="/area/Ahmednagar" onClick={()=>{handleclick("Ahmednagar")}}>Ahmednagar</Link></li>
            <li><Link  className="dropdown-item" to="/area/Solapur" onClick={()=>{handleclick("Solapur")}}>Solapur</Link></li>
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
