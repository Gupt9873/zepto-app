import React, { useState } from 'react';
import ModalLogin from './ModalLogin';
import Header from "./Header";
 
const MainComponent = () => {
  const [showModal, setShowModal] = useState(false);
 
  const openModal = () => {
    setShowModal(true);
  };
 
  const closeModal = () => {
    setShowModal(false);
  };
 
  return (
    <>  <Header/>
  
    <div>
        
      <h1>Welcome to My App</h1>
      <button onClick={openModal}>Login</button>
      {showModal && <ModalLogin closeModal={closeModal} />}
    </div>
    </>
  );
};
 
export default MainComponent;