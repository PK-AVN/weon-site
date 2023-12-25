import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const privateRoute = () => {
  const LoggedPerson = useSelector((state) => state.todos.loggedUser);
  // let isLoggedIn = true;

  // return isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
  if (!LoggedPerson) {
    return (
      <div className='unauthorized'>
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to='/'>Login</NavLink> to gain access
        </span>
      </div>
    )
  }

  return <Outlet />
};

export default privateRoute;
