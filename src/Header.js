

import './App.css'

import React from 'react';
import { Link } from 'react-router-dom';







function Header(){

    return (
    
    <>
    
    
    <div class="box">
         <div class="flex items-center gap-x-6 py-5 px-16"><a aria-label="Zepto Home" href="/">
    <img alt="" loading="lazy" width="90" height="30" decoding="async" data-nimg="1" class="relative overflow-hidden false inline-block min-w-[90px]" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw, " srcset="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.1.18/images/header/primary-logo.svg 256w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.1.18/images/header/primary-logo.svg 384w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.1.18/images/header/primary-logo.svg 640w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.1.18/images/header/primary-logo.svg 750w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.1.18/images/header/primary-logo.svg 828w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.1.18/images/header/primary-logo.svg 1080w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.1.18/images/header/primary-logo.svg 1200w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.1.18/images/header/primary-logo.svg 1920w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.1.18/images/header/primary-logo.svg 2048w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.1.18/images/header/primary-logo.svg 3840w" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.1.18/images/header/primary-logo.svg" />
        </a><div class="relative flex h-[2.75rem] flex-1 flex-col justify-center lg:flex-initial" >
   

        
    
    <span class="flex items-center gap-x-1 text-xl font-bold"><span>Delivery in</span>
    <span class="font-extrabold" >10 Mins</span></span>
    <button aria-haspopup="dialog" aria-label="Select Location" class="flex items-center gap-x-2 text-sm font-semibold" type="button">
    <span class="max-w-[250px] gap-x-2 truncate"><span class="location">Reliance Corporate Park, MIDC Industri...</span></span>
    <svg class="arrow" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>


<div class="search-box">

<input class="search" type='text' placeholder='
 Search for'
/>


</div>

<Link to="/LoginPage">


<button aria-label="login" type="button">
    <div class="relative flex min-w-max flex-col items-center gap-y-1"><svg fill="none" height="24px" viewBox="0 0 26 26" width="24px" xmlns="http://www.w3.org/2000/svg"><circle cx="12.5" cy="11.168" r="3.5" stroke="#000" stroke-linecap="round" stroke-width="1.6"></circle><circle cx="12.5" cy="13.5" r="10.5" stroke="#000" stroke-width="1.6"></circle><path d="M19.5 21.3236C19.0871 20.0832 18.1773 18.9872 16.9117 18.2054C15.646 17.4237 14.0953 17 12.5 17C10.9047 17 9.35398 17.4237 8.08835 18.2054C6.82271 18.9872 5.91289 20.0832 5.5 21.3236" stroke="#000" stroke-linecap="round" stroke-width="1.6"></path></svg><span class="text-sm capitalize">login</span></div>
    </button>
    </Link>

  
<div class="cart">
<Link to="/Cart">  
    <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.4.0/images/header/cart.svg" alt="cart" />   </Link>
   <div class="cart-font"> <h1>Cart</h1>
  
   </div>
  
   
</div>

</div>  


  </div>
  </>
    );
   
}


export default Header;


