import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './sn.css';
import axios from 'axios';
import { LoginContext } from '../../state/LoginContext';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Sn() {
  const navigate = useNavigate();
  const {
    user
  } = useContext(LoginContext);
  const handleSave = async value => {
    try {
      await axios.put(`/test/${user._id}/sn/${value}`, {
        userId: user._id
      });
      navigate('/tf');
    } catch (err) {
      console.log(err);
    }
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "sn_body",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "question2",
      children: ["問題2.", /*#__PURE__*/_jsx("br", {}), "飛行機に乗るときに思うこと"]
    }), /*#__PURE__*/_jsxs("div", {
      className: "answer",
      children: [/*#__PURE__*/_jsx("div", {
        className: "s",
        onClick: () => handleSave('S'),
        children: "旅行面白そうです！！"
      }), /*#__PURE__*/_jsx("div", {
        className: "n",
        onClick: () => handleSave('N'),
        children: "墜落はしないでしょう？"
      })]
    })]
  });
}