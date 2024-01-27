import { React, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import Product02 from "../assets/img/products/product02.png";
import phytochemicals from "../data/Phytochemicals_data";
import ProductEnquiry from "./ProductEnquiry";

const ProductDetail = () => {
  const pageTitle = "Pellitorine";
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("q");
    console.log(id);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const foundProduct = phytochemicals.find(
      (item) => item.id.toString() === id
    );
    setProduct(foundProduct);
  }, [phytochemicals, id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  // const getMessageForKey = (key) => {
  //   if (phytochemicals[key] === null) {
  //     return `The value for ${key} is null`;
  //   } else {
  //     return `The value  for ${key} is not null`;
  //   }
  // };

  // //render message for each key
  // const renderMessages = () => {
  //   return Object.keys(phytochemicals).map((key) => (
  //     <p key={key}>{getMessageForKey} </p>
  //   ));
  // };

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
              <ol className="breadcrumb my-2">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <NavLink to="/Products">Products</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
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
                  {/* Tab Starts */}
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-Description-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Description"
                        type="button"
                        role="tab"
                        aria-controls="pills-Description"
                        aria-selected="true"
                      >
                        Product Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-TechnicalNote-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-TechnicalNote"
                        type="button"
                        role="tab"
                        aria-controls="pills-TechnicalNote"
                        aria-selected="false"
                      >
                        Technical Note
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-SpectrualData-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-SpectrualData"
                        type="button"
                        role="tab"
                        aria-controls="pills-SpectrualData"
                        aria-selected="false"
                      >
                        COA & Spectrual data
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-Analogs-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Analogs"
                        type="button"
                        role="tab"
                        aria-controls="pills-Analogs"
                        aria-selected="false"
                      >
                        Analogs
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-Description"
                      role="tabpanel"
                      aria-labelledby="pills-Description-tab"
                    >
                      {/* Description starts */}
                      <div className="row pt-2">
                        <div className="col-md-6">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              Botanical Source
                            </p>
                            <h6 className="h6">{product?.BotanicalSource || "No Data Found"}</h6>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              IUPAC Name
                            </p>
                            <h6 className="h6">{product?.IUPACName || "No Data Found"}</h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              Synonyms
                            </p>
                            <h6 className="h6">{product?.Synonyms || "No Data Found"}</h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              CAS Number
                            </p>
                            <h6 className="h6">
                              <strong>{product?.CASNumber || "No Data Found"}</strong>
                            </h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              Molecular Formula
                            </p>
                            <h6 className="h6">{product?.MolecularFormula || "No Data Found"}</h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              Molecular weight
                            </p>
                            <h6 className="h6">{product?.MolecularWeight || "No Data Found"}</h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              Appearance
                            </p>
                            <h6 className="h6">{product?.Appearance || "No Data Found"}</h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              Purity
                            </p>
                            <h6 className="h6">{product?.Purity || "No Data Found"}</h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              HRMS(ESI)
                            </p>
                            <h6 className="h6">{product?.HRMS_ESI || "No Data Found"}</h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              Specific Rotation [a]D 20
                            </p>
                            <h6 className="h6">
                              {product?.SpecificRotation_aD20 || "No Data Found"}
                            </h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              InChI Key
                            </p>
                            <h6 className="h6">{product?.InChIKey || "No Data Found"}</h6>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              SMILES
                            </p>
                            <h6 className="h6">{product?.SMILES || "No Data Found"}</h6>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              InChI Code
                            </p>
                            <h6 className="h6">{product?.InChICode || "No Data Found"}</h6>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              PubChem CID
                            </p>
                            <h6 className="h6">{product?.PubChemCID || "No Data Found"}</h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              MDL Number
                            </p>
                            <h6 className="h6">{product?.MDLNumber || "No Data Found"}</h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-desc-item">
                            <p className="text-uppercase font-bold position-relative">
                              Inventory Status
                            </p>
                            <h6 className="h6">{product?.InventoryStatus || "No Data Found"}</h6>
                          </div>
                        </div>
                      </div>
                      {/* Description ends */}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-TechnicalNote"
                      role="tabpanel"
                      aria-labelledby="pills-TechnicalNote-tab"
                    >
                      Technical Note Not Available Currently, We will get back
                      soon
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-SpectrualData"
                      role="tabpanel"
                      aria-labelledby="pills-SpectrualData-tab"
                    >
                      SpectrualData Not Available Currently, We will get back
                      soon
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-Analogs"
                      role="tabpanel"
                      aria-labelledby="pills-Analogs-tab"
                    >
                      Analogs Not Available Currently, We will get back soon
                    </div>
                  </div>

                  {/* Tab ends */}
                </div>
              </div>
             <ProductEnquiry product = {product}></ProductEnquiry>
            </div>
          </div>
        </div>
        {/*sub page main ends */}
      </section>
    </div>
  );
};

export default ProductDetail;
