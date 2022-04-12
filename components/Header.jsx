import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
const navList = [
  { name: "Home", slug: "" },
  { name: "Skill", slug: "#skills" },

  { name: "Education & Experience", slug: "#eande" },
  { name: "Contact", slug: "#contact" },
  { name: "Portfolio", slug: "portfolio" },
];
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  function addHidden() {
    var myCanvas = document.getElementById("offcanvasTop");

    myCanvas.classList.remove("show");
    var myCanvass = document.getElementById("test");

    document.getElementsByTagName("body")[0].removeAttribute("style");

    setTimeout(() => {
      myCanvass.click();
    }, 500);
  }
  function removeHidden() {
    document.getElementsByTagName("body")[0].removeAttribute("style");
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const router = useRouter();

  return (
    <div className={navbar ? "menu menu-background" : "menu"}>
      
        <Link href="/">
          <a className="navbar-brand" href="#">
            <div
              className={
                (navbar || router.asPath.includes("/portfolio")) ? "nav-logo" : "logo"
              }
            ></div>
          </a>
        </Link>
     
      <div>
        <button
          onClick={removeHidden}
          className="menu-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
          id="test"
        >
          Menu
        </button>
        <button className="menu-button resume">Resume</button>
      </div>

      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel">Robert Tran</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {navList.map((list) => {
            return (
              <Link
                href={`/${list.slug}`}
                key={`${list.slug}`}
                data-bs-dismiss="offcanvas"
              >
                <a
                  onClick={addHidden}
                  className={
                    router.asPath === `/${list.slug}`
                      ? "nav-link active disable nav-item click"
                      : "nav-link nav-item click"
                  }
                >
                  {list.name}
                </a>
              </Link>
            );
          })}
          <div className="social-media">
            <a
              href="https://www.facebook.com/profile.php?id=100028181002993"
              rel="noopener noreferrer"
              target="_blank"
            
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a
              href="https://www.linkedin.com/in/robert-tran-a49b251a4/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <Link href="/#contact" >
              <a onClick={addHidden}>
                <FontAwesomeIcon icon={faSquarePhone} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
