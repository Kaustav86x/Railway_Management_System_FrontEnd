import React from 'react';
import { Navbar } from 'react-bootstrap';
import { redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const Home = () => {
  return (
    <>
    <Route path='/redirect' element={ <Navigate to ="/Navbar" /> }/>
    </>
  )
}
