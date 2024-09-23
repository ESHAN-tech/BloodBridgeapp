function Home() {
    const homeBackground = {
      backgroundImage: 'url(/image/Designer.png)',
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
    };
  
    return (
      <>
        {/* <!-- Carousel code start--> */}
        <div style={homeBackground}>
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/image/revi5.jpeg"
                  className="d-block w-50 mx-auto"
                  alt="Football action 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/image/WhatsApp Image 2024-09-01 at 1.05.04 PM.jpeg"
                  className="d-block w-50 mx-auto"
                  alt="Football action 2"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="/image/WhatsApp Image 2024-09-01 at 1.08.11 PM.jpeg"
                  className="d-block w-50 mx-auto"
                  alt="Football action 3"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="/image/WhatsApp Image 2024-09-01 at 1.03.29 PM.jpeg"
                  className="d-block w-50 mx-auto"
                  alt="Football action 4"
                />
              </div>

              <div className="carousel-item">
                <img src="/image/revi1.jpeg"
                  className="d-block w-50 mx-auto"
                  alt="Football action 3"
                />
              </div>

              <div className="carousel-item">
                <img src="/image/revi2.jpeg"
                  className="d-block w-50 mx-auto"
                  alt="Football action 3"
                />
              </div>

              <div className="carousel-item">
                <img src="/image/revi3.jpeg"
                  className="d-block w-50 mx-auto"
                  alt="Football action 3"
                />
              </div>

              <div className="carousel-item">
                <img src="/image/revi4.jpeg"
                  className="d-block w-50 mx-auto"
                  alt="Football action 3"
                />
              </div>
            </div>
  
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
  
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* <!-- Carousel code end--> */}
  
        <div className="row mt-5">
          <div className="col-6 bg-success p-2 text-dark bg-opacity-50">
            {/* <!-- Form code start --> */}
            {/* Add form or other content here */}
          </div>
        </div>
      </>
    );
  }
  
  export default Home;
  