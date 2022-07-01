import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../Firebase.init";
import NewTask from "./NewTask";

const Home = () => {
  const [user] = useAuthState(auth);
  // const [task, setTask] = useState([]);
  const email = user?.email;
  const handlesubmit = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    const email = user?.email;
    const newTask = { task, email };
    fetch("http://localhost:4000/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        refetch();
      });
  };

  const {
    isLoading,
    refetch,
    data: task,
  } = useQuery("repoData", () =>
    fetch(`http://localhost:4000/getTask?email=${email}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <p> loading...</p>;
  }
  // useEffect(() => {
  //   fetch(`http://localhost:4000/getTask?email=${email}`)
  //     .then((res) => res.json())
  //     .then((data) => setTask(data));
  // }, []);
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
    }
  };

  return (
    <div className="shadow-lg max:h-full w-64 m-14 py-8">
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Add a task"
          class="input ml-2 font-xl"
          name="task"
          required
          onKeyPress={handleKeypress}
        />
      </form>
      <div className="grid grid-cols-2">
        {task?.map((newTask) => (
          <NewTask newTask={newTask} key={newTask._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
