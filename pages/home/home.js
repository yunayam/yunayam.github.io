import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { LoginContext } from "../../state/LoginContext";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Home() {
  const {
    user
  } = useContext(LoginContext);
  return /*#__PURE__*/_jsxs("div", {
    className: "body",
    children: [/*#__PURE__*/_jsx("div", {
      className: "logo",
      children: "MBTI TEST"
    }), /*#__PURE__*/_jsx("hr", {}), /*#__PURE__*/_jsx("img", {
      src: "/img/mbti_main.jpg",
      alt: "",
      className: "mbti_main_img"
    }), /*#__PURE__*/_jsx(Link, {
      to: "/ei",
      className: "start",
      children: "TTEST スタート"
    }), /*#__PURE__*/_jsx("div", {
      className: "join_login",
      children: user ? /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(Link, {
          to: "/mbti",
          className: "my_mbti",
          children: "私のmbti確認"
        }), /*#__PURE__*/_jsx(Link, {
          to: "/logout",
          className: "logout",
          children: "ログアウト"
        })]
      }) : /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(Link, {
          to: "/join",
          className: "join",
          children: "新規取得"
        }), /*#__PURE__*/_jsx(Link, {
          to: "/login",
          className: "login",
          children: "ログイン"
        })]
      })
    })]
  });
}
;