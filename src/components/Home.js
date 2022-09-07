import React from 'react';
import NotesContainer from "./NotesContainer";
import Sidebar from "./Sidebar";
import Modal from './Modal';

const Home = () => {
  return <>
    <Sidebar />
    <NotesContainer />
    <Modal />
  </>
}

export default Home