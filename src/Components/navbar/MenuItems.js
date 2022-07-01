import { Link } from "react-router-dom";

const MenuItems = ({ menuItems }) => {
  console.log(menuItems);
  return (
    <div>
      <nav>
        <ul
          className={`ml-5 lg:hidden  text-white text-[18px] uppercase ${
            menuItems ? "" : "hidden"
          }`}
        >
          <li className=" ">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">To-Do</Link>
          </li>
          <li>
            <Link to="/calender">Calendar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuItems;
