import React, { useReducer } from "react";
import ResumeContext from "./ResumeContext";
import type { ResumeAction, ResumeState } from "./types"; // adjust import path as needed

const initState = {
  color: "",
};

const resumeReducer = (
  state: ResumeState,
  action: ResumeAction,
): ResumeState => {
  switch (action.type) {
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "RESET_COLOR":
      return { ...state, color: initState.color };
    default:
      return state;
  }
};
const ResumeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(resumeReducer, initState);

  return <ResumeContext value={{ state, dispatch }}>{children}</ResumeContext>;
};

export default ResumeWrapper;
