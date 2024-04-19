import React, { useState, useEffect } from 'react';
import LandingPage2 from './LandingPage2';



function API() {
  const [data, setData] = useState(null);
var dataset;
  useEffect(() => {
    fetch('http://7eleven-zomato.extensions.sngz0.de/proxy/v1/getCategoryList')
      .then(response => response.json())
     
     .then(json => setData(json))
     .then(data=>dataset=data)
      .catch(error => console.error(error));
  }, []);

  return (
    <div>


    <LandingPage2 data={data}/>
   </div>
      

  );
}

export default API;