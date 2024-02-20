import React from "react";

export default function Home() {
  return (
    <>
      <div className="main-bg text-center vh-100">
        <img src={require("../../images/d.jpg")} alt="devimg" />
        <h2 className="text-white">START FRAMEWORK</h2>
        <div className="star d-flex justify-content-center align-items-center py-2">
          <div className="line"></div>
          <i class="fa-solid fa-star px-3 text-white"></i>
          <div className="line"></div>
        </div>

        <p className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
