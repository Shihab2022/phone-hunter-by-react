import React from 'react';

const ManuBar = () => {
    return (
        <div class="d-flex justify-content-center my-5">
         <div class="input-group mb-3 w-50">        
  <input type="text" class="form-control fw-bolder" placeholder="Search your phone ..." aria-describedby="button-addon2"></input>
  <button class="btn  fw-bolder bg-info" type="button" id="button-addon2">Search</button>
</div>   
        </div>
    );
};

export default ManuBar;