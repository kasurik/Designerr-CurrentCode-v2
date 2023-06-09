import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import Image from 'next/image';
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossorigin="anonymous"
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
          integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS"
          crossorigin="anonymous"
        ></script>
      </Head>

      <div
        className="container-fluid bg-light"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <header style={{ backgroundColor: "#F7F9FF" }}>
          <div className="header p-2" style={{ backgroundColor: "#F7F9FF" }}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img
                    src="/designerr-logo.png"
                    alt="Logo"
                    width="72%"
                    height="auto"
                    class="d-inline-block align-text-top"
                  />
                </a>

                <div
                  className="collapse navbar-collapse d-flex justify-content-end"
                  id="navbarSupportedContent"
                >
                  <div className="d-flex justify-content-end">
                    <img
                      src="/user-img1.png"
                      alt="Logo"
                      width="72%"
                      height="auto"
                      class="d-inline-block align-text-top"
                    />
                    <p style={{ fontSize: 16 }}>John Doe</p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <div className="row">
          <div className="container max814-2">
            <div className="row">
              <div
                className="col-3"
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  height: "850px",
                }}
              >
                <div style={{ backgroundColor: "transparent" }}>
                  <div class="m-3">
                    <button class="new-chat" id="sidebarNewChat_btn">
                      + New Chat
                    </button>
                  </div>

                  {/* today */}
                  <div className="mt-4">
                    <p className="tyni-heading1 mx-3 ">Today</p>
                    <ul className="text-start">
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                    </ul>
                  </div>
                  {/* Yesterday */}
                  <div className="mt-4">
                    <p className="tyni-heading1 mx-3 ">Yesterday</p>
                    <ul className="text-start">
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                    </ul>
                  </div>
                  {/* Previous 7 Days */}
                  <div className="mt-4">
                    <p className="tyni-heading1 mx-3 ">Previous 7 Days</p>
                    <ul className="text-start">
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-9"
                style={{ backgroundColor: "#F2F5FF", color: "#000" }}
              >
                <div className="container">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link "
                        id="pills-setting-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-setting"
                        // type="button"
                        role="tab"
                        aria-controls="pills-setting"
                        aria-selected="true"
                      >
                        Settings
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        // type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Notification
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Billing
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-setting"
                      role="tabpanel"
                      aria-labelledby="pills-setting-tab"
                    >
                      <section id="profile">
                        <div className="row" style={{ marginTop: 30 }}>
                          <div className="col-5">
                            <h4
                              className="card-title"
                              style={{ marginTop: 25 }}
                            >
                              Profile
                            </h4>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 10,
                              }}
                            >
                              <div
                                className="img"
                                style={{
                                  backgroundColor: "blue",
                                  borderRadius: 50,
                                  width: 80,
                                  height: 80,
                                }}
                              ></div>
                              {/* <Image src="/assets/images/Ellipse 179 (1)" width={400} height={200} alt="" /> */}
                            </div>
                            <h5
                              className="card-title"
                              style={{ marginTop: 10 }}
                            >
                              Jhon Doe
                            </h5>

                            <p className="card-text" style={{ marginTop: 25 }}>
                              Admin
                            </p>
                            <button
                              style={{
                                border: 2,
                                backgroundColor: "white",
                                marginTop: 25,
                              }}
                            >
                              {" "}
                              <a
                                href="#"
                                className="btn btn-outline-dark "
                                style={{ textDecoration: "none" }}
                              >
                                Edit Profile
                              </a>
                            </button>
                          </div>

                          <div className="col-6">
                            <div className="container">
                              <p style={{ float: "left", marginBottom: 2 }}>
                                BASIC INFO
                              </p>
                              <br />
                              <hr />
                              <br />
                              <form action="/action_page.php">
                                <div className="form-group">
                                  <label
                                    for="name"
                                    style={{
                                      float: "left",
                                      marginTop: 10,
                                      marginBottom: 10,
                                    }}
                                  >
                                    Name*
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="User name"
                                    name="email"
                                  />
                                </div>

                                <div className="form-group">
                                  <label
                                    for="email"
                                    style={{
                                      float: "left",
                                      marginTop: 10,
                                      marginBottom: 10,
                                    }}
                                  >
                                    Email*
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email address"
                                    name="email"
                                  />
                                </div>

                                <div className="form-group">
                                  <label
                                    for="pwd"
                                    style={{
                                      float: "left",
                                      marginTop: 10,
                                      marginBottom: 10,
                                    }}
                                  >
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="pwd"
                                    placeholder="Enter password"
                                    name="pwd"
                                  />
                                </div>

                                <div className="form-group">
                                  <label
                                    for="pwd-name"
                                    style={{
                                      float: "left",
                                      marginTop: 10,
                                      marginBottom: 10,
                                    }}
                                  >
                                    Name*
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="pwd"
                                    placeholder="Enter name"
                                    name="pwd-name"
                                  />
                                </div>

                                <div
                                  style={{
                                    display: "inline-flex",
                                    float: "right",
                                    marginTop: 20,
                                    marginBottom: 20,
                                  }}
                                >
                                  <button
                                    type="submit"
                                    className="btn btn-outline-dark"
                                    style={{ width: 100 }}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ marginLeft: 15, width: 100 }}
                                  >
                                    Save
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      ...
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      ...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
