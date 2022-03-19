import React, { useEffect, useState } from 'react';
import SinglePhone from '../SinglePhone/SinglePhone';

const AllPhone = () => {
    const [AllPhone,setAllPhone]=useState([])
    useEffect(() =>{
fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
.then(response => response.json())
.then(data=>setAllPhone(data.data))
    },[])
    // console.log(AllPhone)
    return (
        <div className="px-5">
            
            <div className="row px-5">
            {
             AllPhone.map(singlePhone => <SinglePhone singlePhone={singlePhone}></SinglePhone>)   
            }
            </div>
          
          
        </div>
    
    );
  
};

export default AllPhone;