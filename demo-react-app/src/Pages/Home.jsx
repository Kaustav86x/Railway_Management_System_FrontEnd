import React from 'react';
// import { Navbar } from 'react-bootstrap';
import { redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import { HomeBody } from '../Home/HomeBody';
import '../User/Login.css';

export const Home = () => {
  return (
    <>
    <Navbar/>
    <HomeBody/>
    </>
  )
}
