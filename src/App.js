import Navbar from "./components/Header/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/SideBar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
      </Router>
    </>
  );
}

export default App;
