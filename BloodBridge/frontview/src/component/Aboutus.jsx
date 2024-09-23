
import './aboutus.css'

function Aboutus() {
    return(
        <>
        <div className="about-main">
            <div className="about-divone">
                <h1 className='about-heading'>BLOODBRIDGE</h1>
            </div>

            <div className="about-divtwo">

                <div className='subdivtwo'>
                    <div className='subpointtwo'>
                        <img src="/image/MYPIC.jpeg" alt="" />
                    </div>
                    <div className='subpointthird'>
                        <h1> I am Eshan tiwari developed this BLOODBRIDGE project for the donation of blood and also
                            help to get the same blood group to pateint who need it here in this project i used Html,css,
                            css flex box , bootstrap , javascript , reactjs , nodej , expressjs and 
                            mongodb like it's a fullstack project 

                        </h1>
        
                    </div>
                </div>
            </div>
            <div className="about-divthree">
                
            <h3 style={{color:'white'}}>LinkedIn:</h3>
    
        <a href="https://www.linkedin.com/in/eshan-tiwari-a91954237" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/eshan-tiwari-a91954237
        </a>
   

    <h3 style={{color:'white'}}>GitHub:</h3>
   
        <a href="https://github.com/ESHAN-tech" target="_blank" rel="noopener noreferrer">
            https://github.com/ESHAN-tech
        </a>
            </div>
        </div>
        </>
    );
}

export default Aboutus;