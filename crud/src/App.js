// import react from "react";
import Home from "./components/Home"
import Edit from "./components/Edit"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

export default function App() {
  return (
  <div className="container">
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="edit/:id" element={<Edit/>}></Route>
    </Routes>
  </Router>
</div>
)
}
