import React from 'react';
import { Outlet } from 'react-router-dom';
import Asidebar from '../components/asidebar/Asidebar';
import AsidePC from '../components/asidebarPC/AsidePC';


const Layout = () => {
  return (
    <>
        <AsidePC/>
        <Asidebar/>
        <Outlet/>
    </>
  )
}

export default Layout