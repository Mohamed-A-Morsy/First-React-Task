import React from "react";

export default function Contact() {
  return (
    <>
      <div className="text-center vh-100 pt-5 mt-5">
        <h1>CONATCT SECTION</h1>
        <div className="star d-flex justify-content-center align-items-center py-2 my-3">
          <div className="line dark-star"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line dark-star"></div>
        </div>

        <form className="w-50 m-auto ">
          <input className="form-control py-3" type="text" name="userName" placeholder="userName" />
          <input className="form-control py-3 my-3 " type="text" name="userName" placeholder="userAge" />
          <input className="form-control py-3" type="email" name="userName" placeholder="userEmail" />
          <input className="form-control py-3 my-3 " type="password" name="userName" placeholder="userPassword" />






        </form>
      </div>
    </>
  );
}
