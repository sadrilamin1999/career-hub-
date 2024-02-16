import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AppliedJobs from "./pages/AppliedJobs";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w min-h-screen h-screen bg-gray-50 text-gray-700">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applied_jobs" element={<AppliedJobs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
