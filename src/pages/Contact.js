import { React, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Contact() {
  const pageTitle = "Contact";
  const pageIntro = "Reach us";
  const [errors, setErrors] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [subject, setsubject] = useState("");
  const [description, setDescription] = useState("");
  const form = useRef();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    if (phoneNumber === "") {
      newErrors.phoneNumber = "Phone Number  is required";
      isValid = false;
    }
    if (email === "") {
      newErrors.email = "email  is required";
      isValid = false;
    }

    if (subject === "") {
      newErrors.subject = "Subject  is required";
      isValid = false;
    }
    if (description === "") {
      newErrors.description = "Enquiry Description   is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendEmail();
      const formData = {
        firstName,
        lastName,
        phoneNumber,
        email,
        subject,
        description,
      };
    }
  };

  const sendEmail = (e) => {
    // handleSubmit()
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_ddavzm6",
        "template_pii2o4m",
        form.current, // Access the current property of the ref to get the form element
        "WOiMeMwLOwRKj3EPt"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <section className="subPage">
        <div className="subPageHeader">
          <div className="container">
            <div className="row pt-5">
              <div className="col-lg-6 col-md-10">
                <h1 className="h1 font-bold">{pageTitle}</h1>
                <p>{pageIntro}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="subPageMain">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb my-2">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {pageTitle}
                </li>
              </ol>
            </nav>
          </div>
          <div className="container">
            <div className="pageContainer">
              <div className="row">
                <div className="col-md-8">
                  <h2 className="h2 font-semibold font-black pb-3">
                    Send a Message
                  </h2>
                  <form
                    className="contactForm"
                    onSubmit={handleSubmit}
                    ref={form}
                  >
                    <div className="row">
                      <div className="col-md-6 pb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="First Name"
                          aria-label="default input example"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && (
                          <small className="text-danger">
                            {errors.firstName}
                          </small>
                        )}
                      </div>
                      <div className="col-md-6 pb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Last Name"
                          aria-label="default input example"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && (
                          <small className="text-danger">
                            {errors.lastName}
                          </small>
                        )}
                      </div>
                      <div className="col-md-6 pb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Write Email"
                          aria-label="default input example"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </div>
                      <div className="col-md-6 pb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Phone Number"
                          aria-label="default input example"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {errors.phoneNumber && (
                          <small className="text-danger">
                            {errors.phoneNumber}
                          </small>
                        )}
                      </div>
                      <div className="col-md-6 pb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Company (Optional)"
                          aria-label="default input example"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 pb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Subject"
                          aria-label="default input example"
                          value={subject}
                          onChange={(e) => setsubject(e.target.value)}
                        />
                        {errors.subject && (
                          <small className="text-danger">
                            {errors.subject}
                          </small>
                        )}
                      </div>
                      <div className="col-md-12 pb-3">
                        <textarea
                          className="form-control"
                          type="text"
                          placeholder="Description"
                          aria-label="default input example"
                          style={{ height: "150px" }}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        {errors.description && (
                          <small className="text-danger">
                            {errors.description}
                          </small>
                        )}
                      </div>
                    </div>
                    <button className="blue-btn border-0">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
