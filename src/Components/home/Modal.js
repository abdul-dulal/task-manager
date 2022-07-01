import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Modal = () => {
  const [task, setTask] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/newtask/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);

  let newTask = { task };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/updateTask/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        e.target.reset();
        navigate("/");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          className="mt-3"
          value={task.task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Modal;
