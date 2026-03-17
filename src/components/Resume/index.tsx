import React, { useContext } from "react";
import ResumeContext from "./ResumeContext";
import ResumeWrapper from "./ResumeWrapper";
import { FormContextProvider } from "./FormContext";

const Resume: React.FC = () => {
  return (
    <ResumeWrapper>
      <FormContextProvider>
        <ThemeChanger />
      </FormContextProvider>
    </ResumeWrapper>
  );
};

const ThemeChanger = () => {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error("ThemeChanger must be used within a ResumeWrapper");
  }

  const { state, dispatch } = context;

  return (
    <div style={{ color: state.color }}>
      <input
        type="radio"
        value="red"
        checked={state.color === "red"}
        onChange={() => dispatch({ type: "SET_COLOR", payload: "red" })}
      />{" "}
      Red
      <input
        type="radio"
        value="blue"
        checked={state.color === "blue"}
        onChange={() => dispatch({ type: "SET_COLOR", payload: "blue" })}
      />{" "}
      Blue
    </div>
  );
};

export default Resume;
