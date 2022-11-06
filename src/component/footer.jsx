function Footer() {
  return (
    <>
      <footer className="navbar mt-4" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="col-lg-8 col-md-12 mb-4 mb-md-0 ">
          <h5 className="text-uppercase ms-4">About tourism in Jordan </h5>

          <p className="ms-4">
            Jordan is a traveler's dream introduction to the Middle East. Safe
            and friendly, the destination gets travelers up close to world
            wonders <br />and  immerses  them in world-class hospitality. You'll feel
            right at home once you slip into the culture of this easygoing
            country.
          </p>
        </div>

        <div>
          <div className="p-4 me-3">
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="" href="#">
                  <i
                    className="bi bi-facebook"
                    style={{ fontSize: "2rem", color: "cornflowerblue" }}
                  ></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="" href="#">
                  <i
                    className="bi bi-twitter"
                    style={{ fontSize: "2rem", color: "cornflowerblue" }}
                  ></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="" href="#">
                  <i
                    className="bi bi-youtube"
                    style={{ fontSize: "2rem", color: "cornflowerblue" }}
                  ></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="" href="#">
                  <i
                    className="bi bi-instagram"
                    style={{ fontSize: "2rem", color: "cornflowerblue" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-around py-4 border-top w-100">
          <div className="">
            <p>© 2022 Company, Inc. All rights reserved.</p>
          </div>
          {/* <div className="p-2">
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a class="" href="#">
                  <i
                    class="bi bi-facebook"
                    style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                  ></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="" href="#">
                  <i
                    class="bi bi-twitter"
                    style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                  ></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="" href="#">
                  <i
                    class="bi bi-youtube"
                    style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                  ></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="" href="#">
                  <i
                    class="bi bi-instagram"
                    style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
