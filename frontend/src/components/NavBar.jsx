import React from 'react';
import { Layout } from 'antd';
import './NavBar.css';

const { Header } = Layout;

const NavBar = () => (
  <Header className="navbar-header">
    <span className="navbar-title">
      Max ERP Recruitment
    </span>
  </Header>
);

export default NavBar;
