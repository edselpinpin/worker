import React, { Component, }  from 'react';
import { Nav, Navbar,NavbarToggler, Collapse, NavItem, Jumbotron,
        Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Col, Row} from 'reactstrap';

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';


class Header extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this); // allow this to be used on toggleNav
        
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render()
    {
        const bussiness_name =  this.props.sys_settings1.map(sys => sys.bussiness_name);
        const address =  this.props.sys_settings1.map(sys => sys.street) + ' ' + 
                         this.props.sys_settings1.map(sys => sys.city)   +  ' ' +
                         this.props.sys_settings1.map(sys => sys.state) + ' ' + 
                         this.props.sys_settings1.map(sys => sys.zip);
         const  phone_num = this.props.sys_settings1.map(sys => sys.phone_num) + '  ' +
                       this.props.sys_settings1.map(sys => sys.email);
         const email =  this.props.sys_settings1.map(sys => sys.email);     


        return(
            <React.Fragment>  
             <IconContext.Provider value={{color:"white"}}>   
            <Jumbotron fluid style={{margin: 0}} id = "jumbotron">
                    <div className="container">
                       <div className = 'row'>
                            <div className = "col-9">
                                <h2>The Worker</h2>
                                <h5>Work Order Tracker App</h5>
                            </div>

                            <div className = "col-3">
                                <h6>{bussiness_name}</h6>
                                <h6>{address}</h6>
                                <h6>{phone_num}</h6>
                            </div>
                            </div>   
                    </div>
                </Jumbotron>

        <Navbar dark sticky="top" expand="md" id="navhead">
            <div className="container">
                
               
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/">
                                 <AiIcons.AiOutlineHome /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/workorder">
                                <FaIcons.FaBoxOpen/> Work Order
                            </NavLink>
                            
                        </NavItem>
                        {/*
                        <NavItem>
                            <NavLink className="nav-link" to="/invoice">
                                <FaIcons.FaFileInvoice /> Invoice
                            </NavLink>
                        </NavItem>
                        */}
                        <NavItem>
                            <NavLink className="nav-link" to="/customer">
                                <BsIcons.BsPeopleFill /> Customer
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" to="/service">
                                <BiIcons.BiWrench /> Service/Tech
                            </NavLink>
                        </NavItem>

                       
                        <NavItem>
                            <NavLink className="nav-link" to="/settings">
                                <FiIcons.FiSettings /> Settings
                            </NavLink>
                        </NavItem>

                    </Nav>

                    <span className = "navbar-text  ml-auto">
                        <Button outline onClick={this.toggleModal}>
                             Login 
                        </Button>
                    </span>
                </Collapse>
            </div>
        </Navbar>
        </IconContext.Provider>
       </React.Fragment>
                
                
                
    

        )
    }
}
export default Header;