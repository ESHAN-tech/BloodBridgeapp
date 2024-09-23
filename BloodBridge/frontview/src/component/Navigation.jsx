import{Link} from 'react-router-dom'
function Navigation() {
    return (
        <>
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:"lightyellow"}}>
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home" style={{fontSize:"20px" ,  fontWeight: "bold"}}>Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Aboutus" style={{fontSize:"20px" , fontWeight: "bold"}}>AboutUs</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contactus" style={{fontSize:"20px" ,fontWeight: "bold"}}>ContactUs</Link>
        </li>


        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:"20px" ,fontWeight: "bold"}}>
        Doner
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Regi" style={{fontSize:"20px" ,fontWeight: "bold"}}>Registration</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/Login" style={{fontSize:"20px" ,fontWeight: "bold"}}>Login</Link></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/AllDoner" style={{fontSize:"20px" ,fontWeight: "bold"}}>AllDoners</Link>
        </li>
      </ul>
      
    <form className="d-flex" role="search">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success" type="submit">SearchDonor</button>
    </form>

    </div>
  </div>
</nav>
       
            
        </>
    );
}

export default Navigation;