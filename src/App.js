import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
// import EditGift from "./pages/Soo";

function App() {
  console.log("", process.env.REACT_APP_API);
  return (
    <Routes>
      <Route path="/" element={<Episodes />} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
  );
}

export default App;
