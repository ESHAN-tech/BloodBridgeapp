import{Link} from 'react-router-dom'
import './login.css'
function Login(){

    return (
        <>
        <div className='login-main'>
            {/* <img src="/image/loginform.jpg" alt="" /> */}
            <div className='header-HAI'>
                <h1 style={{color:"green" , fontFamily:"serif" , textAlign:"center" }}>Login page</h1>
            </div>
            <div className="hipo-head">
                <form className='hero-login'>
                    <lable className='a'>Email</lable>
                    <input
                    type="Email"
                    placeholder="Enter your email id "
                    name="useremail"
                    className="form-control" 
    
                    />

                    <label className='a'>Password</label>
                    <input
                    type="password"
                    placeholder="Enter your email id "
                    name="userpassword"
                    className="form-control"/>

                    <li className="nav-item" style={{color:"darkgreen"}}>
                    <Link className="nav-link active" aria-current="page" to="/regi">create a new account</Link>
                    </li>
                    <button className='regi-button'>Login</button>

                </form>
            </div>
            </div>
        </>
    );
}

export default Login;