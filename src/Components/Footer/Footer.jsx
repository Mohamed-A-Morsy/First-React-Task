import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="nav-bg text-white  ">
        <div className="container py-5">
          <div className="row ">
            <div className="col-4 text-center">
              <div className="innerHtml ">
                <h2>location</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-4 ">
              <div className="innerHtml text-center">
                <h2>AROUND THE WEB</h2>
                <ul className="list-unstyled d-flex justify-content-center gap-4">
                  <li>
                    <i className="fa-brands fa-facebook" />
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter" />
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin" />
                  </li>
                  <li>
                    <i className="fa-solid fa-globe" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4 ">
              <div className="innerHtml text-center">
                <h2>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center py-2  ">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
