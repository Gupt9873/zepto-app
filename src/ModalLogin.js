import React, { useState } from 'react';
import './ModalLogin.css';
 
const ModalLogin = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic here
    console.log("Logging in with:", username, password);
    // After successful login, you might want to close the modal
    closeModal();
  };
 
  return (
    <div className="modal">
    <div className='modal-container'>
      <div className="modal-content">
      <div>
        <div>
        <div className="login_login_container">
        <div className='login-container'>
          <div>
            <img alt="zepto-logo" className="zepto-login"src='https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.4.0/tr:w-0.2,ar-0.2-0.2,pr-true,f-auto,q-80//images/logo.svg'></img>
            <h2 className="login-heading typography">Groceries delieverd in 10 minutes</h2>
            <div className='input-container input rounded'>
            <span className='input_prefixicon'>
              <span>+91</span>
            </span>
            <input className='input-text input_md bg-transparent' placeholder='Enter Phone Number' type='tel'></input>
            </div>
            <button className='text-base-button login-button btn-contained border-skin border'>
              <div className='btn'>
                Continue
              </div>
            </button>
          </div>
          <div className='login-footer'>
            <p className='footer'>By Continuing,you agrre to our</p>
            <p className='footer'>
            <a className='login_link' href='https://www.zeptonow.com/terms-of-service' rel="noreferrer" target='blank'>Terms of Services</a>&
              <a className="login_link" href="https://www.zeptonow.com/privacy-policy" rel="norefrrer" target='blank'>Privacy Policy</a>
            </p>
            </div>
        </div>
        </div>
        <div className="get-app-modal-container">
          <div className='get-app-modal-container-container'>
            <img alt="get-app-phone" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.4.0/tr:w-100,ar-100-100,pr-true,f-auto,q-80//images/get-the-app/get-the-app-phone.png" className='get-app-image'></img>
            <div className='getpic-2'>
              <h3>Order faster & easier everytime</h3>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>
    </div>
      </div>
 
 
 
  );
};
 
export default ModalLogin;