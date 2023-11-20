import MainLayout from "./pages/MainLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<MainLayout />} />
        <Route path="/projects" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
