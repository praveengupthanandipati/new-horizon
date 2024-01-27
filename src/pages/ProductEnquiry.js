import { React, useState } from "react";
const ProductEnquiry = (product) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("Select Your Designation");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [enquiryDescription, setEnquiryDescription] = useState("");

  const [errors, setErrors] = useState({});
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

    if (designation === "Select Your Designation") {
      newErrors.designation = "Please select your designation";
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
    if (companyName === "") {
      newErrors.companyName = "Company Name   is required";
      isValid = false;
    }
    if (country === "") {
      newErrors.country = "Country  is required";
      isValid = false;
    }
    if (enquiryDescription === "") {
      newErrors.enquiryDescription = "Enquiry Description   is required";
      isValid = false;
    }
    if (product.product === "") {
      newErrors.productName = "Product Name  is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form is valid. Submitting data:", {
        firstName,
        lastName,
        designation,
        phoneNumber,
        email,
        companyName,
        country,
        productName: product.product,
        enquiryDescription,
      });
    } else {
      console.log("Form is not valid. Please fix errors.");
    }
  };
  return (
    <div>
      <section className="ProductEnquiryform p-5 rounded-4 mt-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className="h3 font-semibold">
              Have a question on this product?
            </h3>
            <p>
              <small className="font-gray">
                FILL THE FORM, YOU’LL BE CONTACTED SHORTLY
              </small>
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Do not hesitate to contact our business representatives: they'll
              be happy to get in touch with you. Just fill in the following
              form.{" "}
            </p>
          </div>
        </div>
        <form className="pt-4" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3 form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write your First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                  <small className="text-danger">{errors.firstName}</small>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3 form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write your Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && (
                  <small className="text-danger">{errors.lastName}</small>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3 form-group">
                <label className="form-label">Designation</label>
                <select
                  className="form-select"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                >
                  <option disabled>Select Your Designation</option>
                  <option>Employee</option>
                  <option>Manager</option>
                  <option>Researcher</option>
                </select>
                {errors.designation && (
                  <small className="text-danger">{errors.designation}</small>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3 form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && (
                  <small className="text-danger">{errors.phoneNumber}</small>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3 form-group">
                <label className="form-label">Email ID</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Valid Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3 form-group">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                {errors.companyName && (
                  <small className="text-danger">{errors.companyName}</small>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3 form-group">
                <label className="form-label">Country Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                {errors.country && (
                  <small className="text-danger">{errors.country}</small>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3 form-group">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  defaultValue={product.product.Product}
                />

                {errors.productName && (
                  <small className="text-danger">{errors.productName}</small>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3 form-group">
                <label className="form-label">Describe your Enquiry</label>
                <textarea
                  className="form-control"
                  placeholder="Describe  Your Enquiry"
                  value={enquiryDescription}
                  onChange={(e) => setEnquiryDescription(e.target.value)}
                ></textarea>
                {errors.enquiryDescription && (
                  <small className="text-danger">
                    {errors.enquiryDescription}
                  </small>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <button className="btn green-btn w-100">Submit</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProductEnquiry;
