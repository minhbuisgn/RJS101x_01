import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Collapse, NavbarToggler, Nav } from 'reactstrap';

export default class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            openStatus: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            openStatus: !this.state.openStatus
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand='md'>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className='mr-3' href='/'>
                            Ứng dụng quản lý nhân sự v2.0
                        </NavbarBrand>
                        <Collapse isOpen={this.state.openStatus} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/nhanvien'>
                                        <span className="fa fa-home fa-lg"></span>Nhân viên
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/phongban'>
                                        <span className="fa fa-home fa-lg"></span>Phòng ban
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/bangluong'>
                                        <span className="fa fa-home fa-lg"></span>Bảng lương
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}