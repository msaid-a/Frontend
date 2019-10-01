import React, { Component } from 'react'
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
   } from 'reactstrap';
import {NavLink, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutData } from '../actions/index'

class Header extends Component {
    
    
        state = {
          isOpen: false
        };

      toggle = () =>{
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      renderNavigasi = () =>{
        if(!this.props.userName){
          //belum login
          return(
            <Nav className="ml-auto mr-5">
              <NavItem>
                <NavLink className='nav-link text-secondary' to='/'>All Product</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="btn btn-outline-success" to={"/register"}>Register 
                </NavLink> 
                </NavItem> 
                <NavItem>
                  <NavLink className="btn btn-primary ml-2" to={"/login"}>Login 
                  </NavLink> 
                  </NavItem> 
                  </Nav>
          )
        }else{
          return(
            <Nav className="ml-auto mr-5">
            <NavItem>
              <NavLink className="nav-link text-secondary" to="/">All Product</NavLink>
            </NavItem>
            <UncontrolledDropdown>
              <DropdownToggle nav inNavbar className="text-secondary">
                Helo, {this.props.userName}
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to='/manageproducts'>
                  <DropdownItem>
                    Manage Product
                  </DropdownItem>
                </NavLink>
                <Button className="dropdown-item" onClick={this.props.logoutData}>Logout</Button>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
          )
        }
      }
      

    render() {
        return(
            <div>
                <Navbar color="light" light expand="md">
                  <Link className="navbar-brand" to="/">reactstrap</Link>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    
                      {this.renderNavigasi()}
                    
                  </Collapse>
                </Navbar>
            </div>
        )
    
       
    }
}

const mapStateToProps = (state) =>{
  return {
    userName : state.auth.username,
    iD : state.auth.id,
  }
}

export default connect(mapStateToProps, {logoutData})(Header)

// parameter pertama dari function connect() di gunakan untuk membaca / mengambil data di redux
// parameter keedua dari connect di gunakan untuk mengola 

// Belum login
{/* 
  <NavItem>
<NavLink className="btn btn-outline-success" to={"/register"}>Register</NavLink>
</NavItem>
<NavItem>
<NavLink className="btn btn-primary ml-2" to={"/login"}>Login</NavLink>
</NavItem> */}

// sudah Login
{/* <NavItem>
<NavLink className="nav-link" to="/">All Product</NavLink>
</NavItem>
<UncontrolledDropdown>
<DropdownToggle>
  Helo, userName
</DropdownToggle>
<DropdownMenu>
  <NavLink to='/manageproducts'>
    <DropdownItem>
      Manage Product
    </DropdownItem>
  </NavLink>
  <Button className="dropdown-item">Logout</Button>
</DropdownMenu>
</UncontrolledDropdown> */}