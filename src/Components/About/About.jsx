import React from "react";

export default function About() {
  return (
    <>
      <div className="about vh-100 main-bg text-center text-white  pt-5 ">
       <div className="container mt-5 pt-5">
       <h1>ABOUT COMPONENT</h1>
        <div className="star d-flex justify-content-center align-items-center py-2 ">
          <div className="line"></div>
          <i className="fa-solid fa-star  text-white"></i>
          <div className="line"></div>
        </div>
        <div className="container pt-3">
        <div className="row ">
          <div className="col-6">
          <div>
           <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
            </p>
           </div>
          </div>
          <div className="col-6">
           <div>
           <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
            </p>
           </div>
          </div>
        </div>
        </div>  
       </div>
      </div>
    </>
  );
}
