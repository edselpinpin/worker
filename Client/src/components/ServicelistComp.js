import React from 'react'
import Servicegrid from '../grids/ServiceGrid';
import Techgrid from '../grids/TechGrid';

function Servicelist() {
    return (
        <React.Fragment>
        <div className = "container">
            <div className = "row">
               <div className = "col-md-6 col-xs-12 mt-3">
                   <Servicegrid />
               </div> 
               <div className = "col mt-3">
                   <Techgrid />
               </div>
            </div>
        </div>


</React.Fragment>
    )
}

export default Servicelist;
