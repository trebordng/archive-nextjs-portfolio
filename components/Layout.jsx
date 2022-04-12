import Header from "./Header";
import React, { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


function Layout({ children }) {
  let [loading, setLoading] = useState(true);
  let color = "#93DEFF";
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      if (window.location.hash) {
        const elmnt = document.getElementById(window.location.hash.substring(1));
        elmnt.scrollIntoView();
      }
    }, 1800);
  }, []);

  return (
    <div>
      <div className={loading ? "box-spinner-wrapper" : "display-none"}>
        <ClimbingBoxLoader loading={loading} color={color} size={25} />
      </div>
      <div className={loading ? "loading-height" : ""}>
        <Header />
        
        <div className={loading?"no-op":"fade-in"}>
        {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
