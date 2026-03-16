import { Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./components/DashboardLayout";
import Resume from "./components/Resume";
import AiChat0 from "./pages/AiChat0";

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route
          path="/"
          element={
            <Typography paragraph>
              Welcome to your dashboard. You can add your components here.
            </Typography>
          }
        />
        <Route path="/ai-chat-0" element={<AiChat0 />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
