import React from "react";

export default function Portfolio() {
  return (
    <>
      <div className="text-center vh-100 pt-5 mt-5">
        <h1>PORTFOLIO COMPONENT</h1>
        <div className="star d-flex justify-content-center align-items-center py-2 my-3">
          <div className="line dark-star"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line dark-star"></div>
        </div>

        <div classname="container">
          <div classname="row">
            <div classname="col-4">
              <div className="innerhtml w-25">
                <img
                  className="w-100"
                  src={require("../../images/portfolio.jpg")}
                  alt=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
