import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const NewTask = ({ newTask }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/modal/${newTask._id}`);
  };
  return (
    <>
      <div className="">
        <input type="checkbox" name="" id="" className="m-1" />
        {newTask.task}
      </div>
      <div className="ml-14">
        <label
          for="my-modal-3"
          className="cursor-pointer  modal-button"
          onClick={handleEdit}
        >
          <FiEdit2 />
        </label>
      </div>
    </>
  );
};

export default NewTask;
