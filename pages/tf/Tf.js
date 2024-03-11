import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './tf.css';
import axios from 'axios';
import { LoginContext } from '../../state/LoginContext';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Tf() {
  const navigate = useNavigate();
  const {
    user
  } = useContext(LoginContext);
  const handleSave = async value => {
    try {
      await axios.put(`/test/${user._id}/tf/${value}`, {
        userId: user._id
      });
      navigate('/pj');
    } catch (err) {
      console.log(err);
    }
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "tf_body",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "question3",
      children: ["問題3.", /*#__PURE__*/_jsx("br", {}), "友達が面接で不合格になりました"]
    }), /*#__PURE__*/_jsxs("div", {
      className: "answer",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "t",
        onClick: () => handleSave('T'),
        children: ["この前に言ったあの会社ですか？", /*#__PURE__*/_jsx("br", {}), "他の面接はいつですか？"]
      }), /*#__PURE__*/_jsx("div", {
        className: "f",
        onClick: () => handleSave('F'),
        children: "大丈夫!! 一緒においしいものを食べて頑張りましょう！"
      })]
    })]
  });
}