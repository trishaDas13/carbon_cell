import React from 'react';
import { Outlet } from 'react-router-dom';
import Asidebar from '../components/asidebar/Asidebar';

const Layout = () => {
  return (
    <>
        <Asidebar/>
        <Outlet/>
    </>
  )
}

export default Layout