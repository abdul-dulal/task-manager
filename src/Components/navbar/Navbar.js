import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import MenuItems from "./MenuItems";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import Logout from "../../Components/Logout";

const Navbar = () => {
  const [menuItems, setMenuItems] = useState(false);

  const [user] = useAuthState(auth);
  const show = () => {
    setMenuItems(!menuItems);
  };
  return (
    <div>
      <div className=" bg-[#1B242F] sticky top-0 z-10 ">
        <nav>
          <div>
            <HiOutlineMenu
              onClick={show}
              className="text-white text-5xl block ml-auto  lg:hidden"
            />
          </div>
          <ul className="hidden lg:flex gap-8 lg:h-14 items-center lg:px-48 text-white text-[18px] uppercase">
            <li className=" ">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="todo">To-Do</Link>
            </li>
            <li>
              <Link to="calender">Calendar</Link>
            </li>
            {user ? (
              <Logout />
            ) : (
              <li>
                <Link to="signup">Signup</Link>
              </li>
            )}
          </ul>
        </nav>

        <MenuItems menuItems={menuItems} />
      </div>
    </div>
  );
};

export default Navbar;
