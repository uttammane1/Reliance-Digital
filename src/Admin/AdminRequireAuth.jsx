
import React from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";


const AdminRequireAuth = ({ children }) => {
  const {isAuth} = useSelector(store => store.adminAuthManager)

  if (isAuth) {
    return children;
  } else {
    return (
      <Navigate
        to="/admin/login"
      />
    );
  }
};


export default AdminRequireAuth;
