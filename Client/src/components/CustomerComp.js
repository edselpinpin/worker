import React, { Component } from 'react';
import Customergrid from '../grids/CustomerGrid';
import Wogrid from '../grids/WoGrid';

import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';



class Customerlist extends Component {
    
      
    
    render() {
    return (
      
       <div className = "container" id="customer">
           <div className = "row">
               <div className = "col-md-8 mt-3">
                    <Customergrid/>
               </div>
               <div className = "col mt-3">
                    <Wogrid />
               </div>
               
 
           </div>
           <div className = "row">
           </div>
         </div>  
    )
    }
};

export default Customerlist;
