import Navbar from "./Components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Todo from "./Components/todo/Todo";
import Calander from "./Components/calender/Calander";
import Signup from "./Components/singup/Signup";
import Login from "./Components/login/Login";
import Modal from "./Components/home/Modal";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/calender" element={<Calander />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/modal/:id" element={<Modal />} />
      </Routes>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
