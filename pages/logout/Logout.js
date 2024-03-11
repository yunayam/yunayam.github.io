import React, { useContext, useEffect } from 'react';
import { LoginContext } from "../../state/LoginContext";
import { useNavigate } from 'react-router-dom';
import { jsx as _jsx } from "react/jsx-runtime";
export default function Logout() {
  const {
    dispatch
  } = useContext(LoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({
      type: 'LOGOUT'
    });
    navigate('/');
  }, [dispatch, navigate]);
  return /*#__PURE__*/_jsx("div", {
    children: "Logout"
  });
}
;