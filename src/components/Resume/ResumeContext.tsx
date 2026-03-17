import { createContext, type Dispatch } from "react";
import type { ResumeAction, ResumeState } from "./types"; // adjust import path as needed

const ResumeContext = createContext<{
  state: ResumeState;
  dispatch: Dispatch<ResumeAction>;
}>({
  state: { color: "" },
  dispatch: () => {},
});

export default ResumeContext;
