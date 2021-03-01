import React from 'react'
import Servicegrid from '../grids/ServiceGrid';
import Techgrid from '../grids/TechGrid';
import ServiceImg from '../images/service.svg';
import Tech from '../images/tech.svg';

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
            <div className = "row">
                 <div className = "col-md-6 col-xs-12 mt-3">
                      <img  height = {330} width = {330} src={ServiceImg} />
                </div> 
                <div className = "col-md-6 col-xs-12 mt-3">
                      <img  height = {300} width = {300} src={Tech} />
                </div> 

            </div>
        </div>


</React.Fragment>
    )
}

export default Servicelist;
