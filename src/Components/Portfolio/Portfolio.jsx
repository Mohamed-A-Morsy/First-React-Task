import React from "react";

export default function Portfolio() {
  return (
    <>
      <div className="text-center  pt-5 mt-5">
        <h1>PORTFOLIO COMPONENT</h1>
        <div className="star d-flex justify-content-center align-items-center py-2 my-3">
          <div className="line dark-star"></div>
          <i className="fa-solid fa-star px-2"></i>
          <div className="line dark-star"></div>
        </div>
        <div className="container py-5">
          <div className="row g-3">
            <div className="col-4">
              <div>
              <img className="w-100" src={require("../../images/portfolio.jpg")} alt="" />
              </div>
            </div>
            <div className="col-4">
              <div>
              <img className="w-100" src={require("../../images/portfolio1.jpg")} alt="" />
              </div>
            </div>
            <div className="col-4">
              <div>
              <img className="w-100" src={require("../../images/portfolio2.jpg")} alt="" />
              </div>
            </div>
            <div className="col-4">
              <div>
              <img className="w-100" src={require("../../images/portfolio.jpg")} alt="" />
              </div>
            </div>
            <div className="col-4">
              <div>
              <img className="w-100" src={require("../../images/portfolio1.jpg")} alt="" />
              </div>
            </div>
            <div className="col-4">
              <div>
              <img className="w-100" src={require("../../images/portfolio2.jpg")} alt="" />
              </div>
            </div>
          
            
            
          </div>
          

        </div>
        
      </div>
    </>
  );
}
