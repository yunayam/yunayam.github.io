import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './pj.css';
import axios from 'axios';
import { LoginContext } from '../../state/LoginContext';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Pj() {
  const navigate = useNavigate();
  const {
    user
  } = useContext(LoginContext);
  const handleSave = async value => {
    try {
      await axios.put(`/test/${user._id}/pj/${value}`, {
        userId: user._id
      });
      navigate('/mbti');
    } catch (err) {
      console.log(err);
    }
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "pj_body",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "question4",
      children: ["問題4.", /*#__PURE__*/_jsx("br", {}), " 友達が今日急に会おうと言ったら？"]
    }), /*#__PURE__*/_jsxs("div", {
      className: "answer",
      children: [/*#__PURE__*/_jsx("div", {
        className: "p",
        onClick: () => handleSave('P'),
        children: "すごくいいですよ！今出ます"
      }), /*#__PURE__*/_jsx("div", {
        className: "j",
        onClick: () => handleSave('J'),
        children: "今日ですか？ 急に？ 約束もなしにですか？？"
      })]
    })]
  });
}