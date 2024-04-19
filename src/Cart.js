
import React from "react";
import Header from "./Header";


function Cart(){

    return(
        <div>
       
<Header />

<div class="cart-box">
<div class="cart-box1">


<div class="offer">


<img class="offer" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.6.0/images/cart/delivery-banner-icon.svg" alt="general"/>

</div>
<h1 class="carttext">Delivering to you in 6 mins</h1>

</div>

</div>


<div class="cart-box2">


<h3 class="carttext1">
    Cart (1 Item)



</h3>

<h3 class="cart-box3">

    Rs 9.51  <h1 class="save">saved on this order</h1>
</h3>


<button class="button5" aria-label="Add" type="button">Add More</button>

</div>


<div class="prodbox">

    <div class="leftbox1">
     
     <div class="lbox">
     
     <div class="lbox1">

        <img class="cart-image" src="https://cdn.zeptonow.com/production///tr:w-100,ar-609-936,pr-true,f-auto,q-80/cms/product_variant/e1447e4d-c3e7-45db-87c4-1e1a69101289.png" alt="general" /> 
        <h1 class="cart-desc">Amul Taaza Toned Fresh Milk (Pouch)</h1>
        <button class="button4" aria-label="Add" type="button">-  Add  +</button>
        

     </div>


     </div>

        
    </div>
    <div class="rightbox1">

<div class="rbox">

    <h1 class="save1">
    Avail Offers / Coupons
    </h1>


<div class="images">
    <svg fill="none" height="11" viewBox="0 0 10 11" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M8.73533 4.66211C9.41108 5.04522 9.41108 6.01886 8.73533 6.40196L2.09034 10.1692C1.42371 10.5471 0.597157 10.0656 0.597157 9.29927L0.597157 1.7648C0.597157 0.998484 1.42371 0.516937 2.09034 0.894873L8.73533 4.66211Z" fill="#FF3269"></path></svg>
</div>
</div>


        <div class="rbox1">

<h1 class="total">Item Total</h1>
<div class="bill">
<h3>Handling Charge</h3>
<h3>Small Cart Fee</h3>
<h3>Delivery Fee</h3>

</div>
<h3 class="bill1">Add products worth ₹45 to get free delivery</h3>

<br />
<h1 class="total">Total Bill</h1><br /><h3 class="bill1">Zepto Cash</h3>


<h1 class="total">To Pay</h1>






          
        </div>

        <div class="rbox2">


<div class="Address">
    <img class="map" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.6.0/images/location-pin.svg" alt="general" />
    <h1 class="Addresstext">Enter your delivery address</h1>
</div>


        </div>
    </div>

</div>


        </div>
        
        

    )

}

export default Cart;