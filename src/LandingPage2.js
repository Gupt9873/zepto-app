


import { Link } from 'react-router-dom';


import React, { useState, useEffect } from 'react';
function LandingPage2() {
    const [data, setData] = useState({items:[]});
 
    useEffect(() => {
      fetch('http://7eleven-zomato.extensions.sngz0.de/proxy/v1/getCategoryList')
        .then(response => response.json())
       
       .then(json => setData(json))
      
        .catch(error => console.error(error));
    }, []);
  
    

    return (
        <div class="category-grid_content___9VmX pt-4">


    {data.items.map(p => {
      return (
        <div>
            <Link to="/ProductDetail">
      <img class="imagelist" key={p.media.logo} src={p.media.portrait} alt="can't show " />
       <h1 class="category-description">{p.name}</h1>
       </Link>
      </div>
   
      )


    })}
   
 

            {/* <div class="image5">

                <a href="https://www.zeptonow.com/cn/fruits-vegetables/all/cid/64374cfe-d06f-4a01-898e-c07c46462c36/scid/e78a8422-5f20-4e4b-9a9f-22a0e53962e3">

                    <img src="https://cdn.zeptonow.com/production///tr:w-420,ar-486-333,pr-true,f-auto,q-80/cms/category/4529e4a6-53c8-47c0-9386-bf6da3bbc2d6.png" alt="shampoo" />
                </a>
            </div>

 
            <div clasclasss="image6">

                <img src="https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/9ab5de50-8c4f-4491-8352-763a8337b59cAttaRiceOilDals.png" alt="atta" />

            </div>

            <div class="image7">
                <img src="https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/ccaee195-95e4-45f2-bf66-41c522317893.png" alt="general" />
            </div>




            <div class="image8">
                <img src="https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/75f0ef92-26db-4664-a09b-fecb501ed46bZeptoCafe.png" alt="general1" />

            </div>


            <div class="image9">
                <img src="https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/983cf063-e68f-47ca-bcc7-17ffff457949.png" alt="general" />

            </div>

            <div class="image10">
                <img src="https://cdn.zeptonow.com/production///tr:w-210,ar-226-333,pr-true,f-auto,q-80/cms/category/fd755b5d-08a1-40e2-b9ee-8ff7de284b9a.png" alt="general" />
            </div>





            <div class="image12">
                <a href="https://www.zeptonow.com/cn/jewellery/earrings/cid/27b4b613-108e-4c77-91e6-b839d542385b/scid/02413d26-639d-4488-b6ad-f285b0fe3ab6">
                    <img src="https://cdn.zeptonow.com/production///tr:w-210,ar-226-333,pr-true,f-auto,q-80/cms/category/e3d13464-3ce0-47a2-86d1-f9c0843f3d4f.png" alt="general" />
                </a>
            </div>

            <div class="image13">

                <img src="https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/cc40d740-723c-495f-a82b-06458155b717FrozenFoodIceCreams.png" alt="general" />

            </div>

            <div class="image14">

                <img src="https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/23b416d5-cf37-4c59-b889-54d1b5e57fcaPackagedFood.png" alt="general" />
            </div>


            <div class="image15">
                <img src="https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/3a529c63-cc24-428b-b7ee-7977fa4dad0bDairyBreadEggs.png" alt="general" />
            </div> */}
        </div>



    )
}

export default LandingPage2;