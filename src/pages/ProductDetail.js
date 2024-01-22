import { React, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import Product02 from "../assets/img/products/product02.png";
import phytochemicals from "../data/Phytochemicals_data";

const ProductDetail = () => {
  const pageTitle = "Pellitorine";
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("q");
  //   console.log(id);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const foundProduct = phytochemicals.find(
      (item) => item.id.toString() === id
    );
    setProduct(foundProduct);
  }, [phytochemicals, id]);

  if (!product) {
    return <div>Product not found</div>;
  };

const getMessageForKey=(key)=>{
  if (phytochemicals[key]===null){
    return `The value for ${key} is null`;
  } else {
    return `The value  for ${key} is not null`;
  }
}

//render message for each key
const renderMessages = ()=>{
  return Object.keys(phytochemicals).map((key)=>(
    <p key={key}>{getMessageForKey} </p>
  ));
};  

  return (
    <div>
      <section className="subPage">
        {/* sub page header starts */}
        <div className="subPageHeader">
          <div className="container">
            <div className="row pt-5">
              <div className="col-lg-6 col-md-10">
                <h1 className="h1 font-bold">{product.Product}</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Sub page header ends */}
        {/*sub page main */}
        <div className="subPageMain">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb my-2">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li class="breadcrumb-item" aria-current="page">
                  <NavLink to="/Products">Products</NavLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {product.Product}
                </li>
              </ol>
            </nav>
          </div>
          <div className="container">
            <div className="pageContainer">
              <div className="row">
                <div className="col-md-3">
                  <figure className="border p-3 rounded-3 text-center sticky-top">
                    <img src={product.Image} className="img-fluid" />
                  </figure>
                </div>
                <div className="col-md-9">                
                  <div className="row pt-2">
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Botanical Source
                        </p>
                        <h6 className="h6">{product.BotanicalSource}</h6>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          IUPAC Name
                        </p>
                        <h6 className="h6">{product.IUPACName}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Synonyms
                        </p>
                        <h6 className="h6">{product.Synonyms}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          CAS Number
                        </p>
                        <h6 className="h6">
                          <strong>{product.CASNumber}</strong>
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Molecular Formula
                        </p>
                        <h6 className="h6">{product.MolecularFormula}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Molecular weight
                        </p>
                        <h6 className="h6">{product.MolecularWeight}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Appearance
                        </p>
                        <h6 className="h6">{product.Appearance}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Purity
                        </p>
                        <h6 className="h6">{product.Purity}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          HRMS(ESI)
                        </p>
                        <h6 className="h6">{product.HRMS_ESI}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Specific Rotation [a]D 20
                        </p>
                        <h6 className="h6">{product.SpecificRotation_aD20}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          InChI Key
                        </p>
                        <h6 className="h6">{product.InChIKey}</h6>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          SMILES
                        </p>
                        <h6 className="h6">{product.SMILES}</h6>
                      </div>
                    </div>
                   
                    <div className="col-md-12">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          InChI Code
                        </p>
                        <h6 className="h6">{product.InChICode}</h6>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          PubChem CID
                        </p>
                        <h6 className="h6">{product.PubChemCID}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          MDL Number
                        </p>
                        <h6 className="h6">{product.MDLNumber}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Inventory Status
                        </p>
                        <h6 className="h6">{product.InventoryStatus}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*product enquiry form  */}
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
                      Do not hesitate to contact our business representatives:
                      they'll be happy to get in touch with you. Just fill in
                      the following form.{" "}
                    </p>
                  </div>
                </div>
                <form className="pt-4">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Write your First name"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Write your Last name"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Designation</label>
                        <select className="form-select">
                          <option selected>Select Your Designation</option>
                          <option>Employee</option>
                          <option>Manager</option>
                          <option>Researcher</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Email ID</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Valid Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Valid Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Country Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Product Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={product.Product}
                          value={product.Product}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3 form-group">
                        <label class="form-label">Describe your Enquiry</label>
                        <textarea
                          className="form-control"
                          placeholder="Describe  Your Enquiry"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button className="btn green-btn w-100">Submit</button>
                    </div>
                  </div>
                </form>
              </section>
              {/*product enquiry form ends */}
            </div>
          </div>
        </div>
        {/*sub page main ends */}
      </section>
    </div>
  );
};

export default ProductDetail;
