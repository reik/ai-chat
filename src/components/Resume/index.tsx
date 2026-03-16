import React, { useContext } from "react";
import ResumeContext from "./ResumeContext";

const Resume: React.FC = () => {
  const theme = useContext(ResumeContext);

  return <div style={{ color: theme.color }}>Resume Content</div>;
};

export default Resume;
