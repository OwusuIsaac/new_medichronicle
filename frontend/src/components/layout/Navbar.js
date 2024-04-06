import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      {loggedIn === true && (
        <>
          <LogOutBtn />
        </>
      )}
    </div>
  );
}

export default Navbar;
