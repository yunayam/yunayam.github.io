import React, { useRef } from 'react';
import './Join.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Join() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      };
      await axios.post("/auth/register", user);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return /*#__PURE__*/_jsx("div", {
    className: "join_body",
    children: /*#__PURE__*/_jsx("div", {
      children: /*#__PURE__*/_jsxs("form", {
        className: "join_form",
        onSubmit: e => handleSubmit(e),
        children: [/*#__PURE__*/_jsx("input", {
          type: "text",
          placeholder: "NAME",
          className: "username",
          ref: username,
          required: true
        }), /*#__PURE__*/_jsx("input", {
          type: "text",
          placeholder: "EMAIL",
          className: "userId",
          ref: email,
          required: true
        }), /*#__PURE__*/_jsx("input", {
          type: "password",
          placeholder: "PASSWORD",
          className: "password",
          ref: password,
          required: true
        }), /*#__PURE__*/_jsx("input", {
          type: "submit",
          value: "新規取得",
          className: "join_btn"
        })]
      })
    })
  });
}