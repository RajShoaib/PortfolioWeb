

// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Zoom from "react-reveal/Zoom";
// import emailjs from "emailjs-com";
// import { AiOutlineSend } from "react-icons/ai";
// import { FiPhone, FiAtSign } from "react-icons/fi";
// import { HiOutlineLocationMarker } from "react-icons/hi";

// export default function Contactus() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!(formData.name && formData.email && formData.message)) {
//       alert("All fields are required!");
//       return;
//     }

//     emailjs
//       .send(
//         "service_0ledi5j", // Replace with your EmailJS Service ID
//         "template_u5uf58s", // Replace with your EmailJS Template ID
//         formData,
//         "kZEFw9Mpk6vqj_jys" // Replace with your EmailJS User ID
//       )
//       .then(
//         (result) => {
//           alert(`Thanks ${formData.name}, your message has been sent!`);
//           setFormData({ name: "", email: "", message: "" });
//         },
//         (error) => {
//           console.error("Error sending email:", error);
//           alert("There was an error sending your message. Please try again.");
//         }
//       );
//   };

//   return (
//     <div>
//       <Container fluid className="certificate-section" id="about">
//         <Container>
//           <Row>
//             <Col
//               md={12}
//               className="certificate-description d-flex justify-content-start"
//             >
//               <Zoom left cascade>
//                 <h1 className="aboutme-heading">Contact me</h1>
//               </Zoom>
//             </Col>
//             <Col md={12} id="contact" className="mt-3">
//               <Row>
//                 <Col md={4}>
//                   <div className="contacts-form" data-aos="fade-up">
//                     <form onSubmit={handleSubmit}>
//                       <div className="input-container d-flex flex-column">
//                         <label htmlFor="username" className="label-class">
//                           Full Name
//                         </label>
//                         <input
//                           type="text"
//                           className="form-input input-class"
//                           id="username"
//                           name="name"
//                           placeholder="Enter your name"
//                           value={formData.name}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       <div className="input-container d-flex flex-column">
//                         <label htmlFor="email" className="label-class">
//                           Email address
//                         </label>
//                         <input
//                           type="email"
//                           className="form-input input-class"
//                           name="email"
//                           id="email"
//                           placeholder="Enter email"
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       <div className="input-container d-flex flex-column">
//                         <label htmlFor="userMessage" className="label-class">
//                           Message
//                         </label>
//                         <textarea
//                           className="form-message input-class"
//                           id="userMessage"
//                           name="message"
//                           rows="7"
//                           placeholder="Enter message"
//                           value={formData.message}
//                           onChange={handleChange}
//                         />
//                       </div>

//                       <div className="submit-btn">
//                         <button type="submit" className="submitBtn">
//                           Submit
//                           <AiOutlineSend className="send-icon" />
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </Col>
//                 <Col md={7}>
//                   <div className="contacts-details">
//                     <a
//                       href={`mailto:shoaib2rocks@gmail.com`}
//                       className="personal-details"
//                     >
//                       <div className="detailsIcon">
//                         <FiAtSign />
//                       </div>
//                       <p style={{ color: "#fbd9ad" }}>shoaib2rocks@gmail.com</p>
//                     </a>
//                     <a href={`tel:+91 7903234894`} className="personal-details">
//                       <div className="detailsIcon">
//                         <FiPhone />
//                       </div>
//                       <p style={{ color: "#fbd9ad" }}>+91 7903234894</p>
//                     </a>
//                     <a
//                       href="https://maps.app.goo.gl/oxtAJccnW3kFztpN9"
//                       className="personal-details"
//                     >
//                       <div className="personal-details">
//                         <div className="detailsIcon">
//                           <HiOutlineLocationMarker />
//                         </div>
//                         <p style={{ color: "#fbd9ad" }}>
//                           Azad Nagar, Jarangdih, Bokaro, Jharkhand
//                         </p>
//                       </div>
//                     </a>
//                   </div>
//                   <div className="contact-map">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45735.538211091916!2d85.91872305559593!3d23.77200084642231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f46b41bf6887a1%3A0x86fd01a75ece5baa!2sBAHAS%20CHOWK!5e0!3m2!1sen!2sin!4v1731926177333!5m2!1sen!2sin"
//                       frameBorder="0"
//                       allowFullScreen=""
//                       aria-hidden="false"
//                       title="Contact Me"
//                       tabIndex="0"
//                       loading="lazy"
//                       className=""
//                     ></iframe>
//                   </div>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import emailjs from "emailjs-com";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Retrieve the current visitor count from localStorage
    const storedCount = localStorage.getItem("visitorCount");

    // If the count exists, increment it, otherwise set it to 1
    if (storedCount) {
      const newCount = parseInt(storedCount, 10) + 1;
      setVisitorCount(newCount);
      localStorage.setItem("visitorCount", newCount); // Save the new count back to localStorage
    } else {
      setVisitorCount(1); // First visit
      localStorage.setItem("visitorCount", 1); // Set initial count in localStorage
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("All fields are required!");
      return;
    }

    emailjs
      .send(
        "service_0ledi5j", // Replace with your EmailJS Service ID
        "template_u5uf58s", // Replace with your EmailJS Template ID
        formData,
        "kZEFw9Mpk6vqj_jys" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          alert(`Thanks ${formData.name}, your message has been sent!`);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("There was an error sending your message. Please try again.");
        }
      );
  };

  let date = new Date();
  let year = date.getFullYear();

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form onSubmit={handleSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="7"
                          placeholder="Enter message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button type="submit" className="submitBtn">
                          Submit
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:shoaib2rocks@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>shoaib2rocks@gmail.com</p>
                    </a>
                    <a href={`tel:+91 7903234894`} className="personal-details">
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+91 7903234894</p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/oxtAJccnW3kFztpN9"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          Azad Nagar, Jarangdih, Bokaro, Jharkhand
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45735.538211091916!2d85.91872305559593!3d23.77200084642231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f46b41bf6887a1%3A0x86fd01a75ece5baa!2sBAHAS%20CHOWK!5e0!3m2!1sen!2sin!4v1731926177333!5m2!1sen!2sin"
                      frameBorder="0"
                      allowFullScreen=""
                      aria-hidden="false"
                      title="Contact Me"
                      tabIndex="0"
                      loading="lazy"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Total Visitors Section */}
      <div className="total-visitors">
        <h4 className="visitor-count-text">
          Total Visitors : <span>{visitorCount}</span>
        </h4>
      </div>
    </div>
  );
}
