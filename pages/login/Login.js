import React, { useContext, useRef } from 'react';
import './Login.css';
import { loginCall } from '../../ActionCalls';
import { LoginContext } from '../../state/LoginContext';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const {
    user,
    isFetching,
    error,
    dispatch
  } = useContext(LoginContext);
  const handleSubmit = e => {
    e.preventDefault();
    loginCall({
      email: email.current.value,
      password: password.current.value
    }, dispatch);
  };
  return /*#__PURE__*/_jsx("div", {
    className: "login_body",
    children: /*#__PURE__*/_jsx("div", {
      children: /*#__PURE__*/_jsxs("form", {
        className: "login_form",
        onSubmit: e => handleSubmit(e),
        children: [/*#__PURE__*/_jsx("input", {
          type: "text",
          placeholder: "ID",
          className: "userId",
          ref: email
        }), /*#__PURE__*/_jsx("input", {
          type: "password",
          placeholder: "PASSWORD",
          className: "password",
          ref: password
        }), /*#__PURE__*/_jsx("input", {
          type: "submit",
          value: "LOGIN",
          className: "login_btn"
        })]
      })
    })
  });
}