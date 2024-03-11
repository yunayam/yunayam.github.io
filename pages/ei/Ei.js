import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ei.css';
import axios from 'axios';
import { LoginContext } from '../../state/LoginContext';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Ei() {
  const navigate = useNavigate();
  const {
    user
  } = useContext(LoginContext);
  const handleSave = async value => {
    try {
      await axios.put(`/test/${user._id}/ei/${value}`, {
        userId: user._id
      });
      navigate('/sn');
    } catch (err) {
      console.log(err);
    }
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "ei_body",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "question1",
      children: ["問題1", /*#__PURE__*/_jsx("br", {}), "週末二日連続で約束を取ってしまいました。"]
    }), /*#__PURE__*/_jsxs("div", {
      className: "answer",
      children: [/*#__PURE__*/_jsx("div", {
        className: "e",
        onClick: () => handleSave('E'),
        children: "楽しい週末になりそうですね。"
      }), /*#__PURE__*/_jsx("div", {
        className: "i",
        onClick: () => handleSave('I'),
        children: "私がなぜそうしたのでしょうか···キャンセルしたいです.."
      })]
    })]
  });
}