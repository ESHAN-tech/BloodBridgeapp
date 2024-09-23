import "./contactus.css";
import axios from 'axios';
import { useState } from 'react';

function Contactus() {
  // const URL = 'http://localhost:4000/bloodApi/addContact';
  const [contact, setContact] = useState({ UserName: '', UserEmail: '', UserPhone: '', UserQuery: '' });

  // Update state when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, contact);
      console.log('Received from server:', response.data);
      // Handle the response data as needed
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="Heading-part">
        <h1 className="interactive-heading">Contact-us</h1>
      </div>
      <div className="heroG">
        <div className="contact_content">
          <form className="c-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">FullName:</label>
              <input
                type="text"
                name="UserName"
                value={contact.UserName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="form-control"
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="UserEmail"
                value={contact.UserEmail}
                onChange={handleChange}
                placeholder="Enter your email"
                className="form-control"
              />
            </div>

            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                name="UserPhone"
                value={contact.UserPhone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="form-control"
              />
            </div>

            <div>
              <label htmlFor="query">Query:</label>
              <textarea
                rows="4"
                name="UserQuery"
                value={contact.UserQuery}
                onChange={handleChange}
                placeholder="Enter your query"
                className="form-control"
              ></textarea>
            </div>

            <div className="c-button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <div className="image_wala">
          <img src="/image/contactkero.png" alt="doners pic" />
        </div>
      </div>
    </>
  );
}


export default Contactus;
