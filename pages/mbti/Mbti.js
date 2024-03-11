import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import './mbti.css';
import { LoginContext } from '../../state/LoginContext';
import MbtiText from './MbtiText';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Mbti() {
  const {
    user,
    dispatch
  } = useContext(LoginContext);
  useEffect(() => {
    const fetchUser = async () => {
      // 사용자 정보를 다시 조회.
      const res = await axios.get(`/user/${user._id}`);
      dispatch({
        type: 'UPDATE_USER',
        payload: res.data
      }); // 사용자 정보 업데이트.
    };
    if (user && user._id) {
      fetchUser();
    }
  }, [dispatch, user]);
  return /*#__PURE__*/_jsxs("div", {
    className: "mbti_body",
    children: [/*#__PURE__*/_jsx("div", {
      className: "mbtiResult",
      children: user === null || user === void 0 ? void 0 : user.mbti
    }), /*#__PURE__*/_jsx("div", {
      className: "middle",
      children: "あなたは?"
    }), /*#__PURE__*/_jsx("div", {
      className: "mbtiContext",
      children: /*#__PURE__*/_jsx(MbtiText, {
        selectedMbtiType: user.mbti
      })
    })]
  });
}