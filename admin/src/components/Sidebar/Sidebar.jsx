import React from 'react'
import { LuCalendarCheck } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";

import './Sidebar.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <CiCirclePlus />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <LuCalendarCheck />
          <p>List Item</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <LuCalendarCheck />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
