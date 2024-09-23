import "./registration.css"
//here i will use flex 
function Registrationtwo() {
    return (
        <>
        <div className="boss">

            <div className="sub-bossone">
            <img src="/image/regi1.png" alt=" doners pic" />
            </div>


            <div className="sub-bosstwo">
                <h1 style={{textAlign:"center", color:"red" , fontFamily:"fantasy" , border:"2px solid black" }}>Registration form </h1>
                <div className="regi-form">
                    <form className="regi-formtag">
                        <label className="class-lable"> FullName </label>
                        <input

                        type="text"
                        placeholder="Enter your name"
                        name="username"
                        className="form-control"

                        /><br/>

                        <label className="class-lable">phone</label>
                        <input
                        type="tel"
                        placeholder="Enter your number"
                        name="userphone"
                        className="form-control"
                        
                        /><br/>

                        <label className="class-lable">age</label>
                        <input
                        type="tel"
                        placeholder="Enter your age"
                        name="userage"
                        className="form-control"
                        /><br/>

                        <label className="class-lable">Gender</label>
                        <br/>
                        <input type="radio" name="gender" value="male" /> Male<br/>
                        <input type="radio" name="gender" value="female" /> Female<br/>
                        <input type="radio" name="gender" value="other" /> Other
                        <br/><br/>
                        <label className="class-lable">Email</label>
                        <input
                        type="email"
                        placeholder="Enter your email"
                        name="useremail"
                        className="form-control"                
                        /><br/>

                        <label className="class-lable">Date</label>
                        <input
                        type="date"
                        placeholder="date"
                        name="date"
                        className="form-control"
                        /><br/>

                        <label className="class-lable">Address</label>
                        <textarea  rows="3" 
                        name="useraddress" 
                        placeholder="Enter your address" 
                        className="form-control" >

                        </textarea><br/>

                        <label className="class-lable">password</label>
                        <input
                        type="password"
                        placeholder="Enter your password"
                        name="userpassword"
                        className="form-control"
                        /><br/>

                        

                        <label className="class-lable"> BloodGroup </label>
                        <select>
                        <option value="">Please Select</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        </select>  
                        <br/><br/>

                        <button className="regi-button">Submit</button>

                        
                      
                    </form>
                </div>

            </div>


            <div className="sub-bossthree">
            <img src="/image/regi2.png" alt=" doners pic" />
            </div>
        </div>


            
        </>
    );
}

export default Registrationtwo;