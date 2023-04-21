import React from 'react'
import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';

const DashboardPage = () => {
  return (
    <main className="d-flex">
      <Sidebar />
      <Outlet />
    </main>
  )
}


export default DashboardPage;