import React, { useState, useContext } from "react";
import ResumeContext from "./ResumeContextl";

const Resume = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState("blue");
  const theme = useContext(ResumeContext);

  return <ResumeContext value={{ color: color }}>{children}</ResumeContext>;
};

export default Resume;
