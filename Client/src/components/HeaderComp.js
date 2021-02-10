import React, { Component, }  from 'react';
import { Nav, Navbar,NavbarToggler, Collapse, NavItem, Jumbotron,
        Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';


import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';


class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
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
        return(
            <React.Fragment>  
             <IconContext.Provider value={{color:"white"}}>   
            <Jumbotron fluid style={{margin: 0}} id = "jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>The Worker</h2>
                                <h5>Work Order Tracker App</h5>
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