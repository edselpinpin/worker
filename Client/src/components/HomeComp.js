import React from 'react'
import Wodue from '../grids/WodueGrid';
import Techload from '../grids/TechloadGrid';


function Home() {
    return (
        <React.Fragment>
          <div className = "container">
              
              <div className = "row">
                    <div className = "col-12 mt-3">
                        <h4>At a glance</h4>
                        
                   </div>
                   <div className = "col-md-6 col-xs-12 mt-3">
                     <h6>Past due Work Order(s)</h6> 
                      <Wodue />  
                   </div>
                   <div className = "col-md-6 col-xs-12 mt-3">
                      <h6>Work Order(s) due Today</h6> 
                      <Wodue />  
                   </div>
              </div>
              <div className = "row justify-content-md-center">
                    <div className = "col-md-6 col-xs-12  mt-5" >
                      <h6>Technician's Workload</h6>   
                         <Techload />
                    </div>
              </div>
         </div>    
           
        </React.Fragment>
    )
}
export default Home;
