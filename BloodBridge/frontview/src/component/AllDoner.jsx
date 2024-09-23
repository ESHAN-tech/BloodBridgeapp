
import './Alldoner.css'
function AllDoner() {
    return (
        <>
        <div className="Main-Doner">
            <div className="Doner-boss">
            <div className="main-one">
                
                <div className='about-img'>
                    <img src="/image/WhatsApp Image 2024-09-01 at 1.03.29 PM.jpeg" alt="" />
                </div>
            
            </div>

            <div className="main-one">
                
                <div>
                    <img src="/image/WhatsApp Image 2024-09-01 at 1.05.04 PM.jpeg" alt="" />
                </div>
               
            </div>

            <div className="main-one">
                
                <div>
                <img src="/image/WhatsApp Image 2024-09-01 at 1.08.11 PM.jpeg" alt="" />
                </div>
                
            </div>

            <div className="main-one">
                
                <div>
                <img src="/image/WhatsApp Image 2024-09-01 at 1.07.42 PM.jpeg" alt="" />
                </div>
                
            </div>

            <div className="main-one">
                
                <div>
                <img src="/image/WhatsApp Image 2024-09-01 at 1.07.07 PM.jpeg" alt="" />
                </div>
                
            </div>

            <div className="main-one">
                
                <div>
                <img src="/image/WhatsApp Image 2024-09-01 at 1.06.29 PM.jpeg" alt="" />
                </div>
                
            </div>
            <div className="Review-box" >

                <h1 style={{color:"orange", textAlign:"center" , fontFamily:"fantasy" ,textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" ,fontSize: "45px" }}>
                ✨ User review ✨
                      </h1>

                <div className='review-imgContent'>
    
                <div className='review-img'>
                <img src="/image/WhatsApp Image 2024-09-01 at 1.03.29 PM.jpeg" alt="" />
                </div>
                <div>
                    <h4>Incredibly user-friendly app! It simplifies the process of finding blood donation drives and keeps everything organized.<br/>⭐⭐⭐⭐ </h4>
                </div>

                </div>

                <div className='review-imgContent'>

                <div className='review-img'>
                <img src="/image/revi1.jpeg" alt="" />
                </div>
                <div><h4>This app is a lifesaver—literally! It helps connect donors and recipients quickly and efficiently.<br/>⭐⭐⭐</h4></div>

                </div>

                <div className='review-imgContent'>

                <div className='review-img'>
                <img src="/image/revi2.jpeg" alt="" />
                </div>
                <div><h4>I love how easy it is to register and get notified about local blood donation camps. Very useful!<br/>⭐⭐⭐⭐⭐</h4></div>

                </div>

                <div className='review-imgContent'>

                <div className='review-img'>
                <img src="/image/revi3.jpeg" alt="" />
                </div>
                <div><h4>Great initiative! The app makes blood donation convenient and helps in emergencies with real-time alerts.<br/>⭐⭐⭐⭐⭐</h4></div>

                </div>

                <div className='review-imgContent'>

                <div className='review-img'>
                <img src="/image/revi4.jpeg" alt="" />
                </div>
                <div><h4>Simple and efficient! A must-have for anyone who wants to donate blood and make a difference.<br/>⭐⭐⭐</h4></div>

                </div>

                <div className='review-imgContent'>

                <div className='review-img'>
                <img src="/image/revi5.jpeg" alt="" />
                </div>
                <div><h4>The interface is clean and easy to navigate. It’s never been easier to find nearby donation centers! <br/>⭐⭐⭐⭐</h4></div>

                </div>
                <div className='review-imgContent'>

                <div className='review-img'>
                <img src="/image/revi6.jpeg" alt="" />
                </div>
                <div><h4>Excellent app for keeping track of my donations and getting reminders for when I’m eligible to donate again.<br/>⭐⭐⭐</h4></div>

                </div>
                <div className='review-imgContent'>

                <div className='review-img'>
                <img src="/image/revi7.jpeg" alt="" />
                </div>
                <div><h4>A life-changing app! It brings donors and those in need together with just a few taps.<br/>⭐⭐⭐⭐⭐</h4></div>

                </div>

            </div>
            </div>

            <div className="your-review">
            <div >
            <form >
            <div>
            <label htmlFor="query" className='a'>Comment your review:</label>
            <textarea  rows="4" 
            name="UserQuery" 
            placeholder="Enter your Review" 
            className="form-control" >

            </textarea>
            </div>
            <div className="c-button">
            <button>Submit</button>
            </div>
            </form>
            </div> 
            </div>   
        </div>
            
        </>
    );
}

export default AllDoner;